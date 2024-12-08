import type * as CSS from "csstype"
import type { additionalProps, atRuleProps, uiProps } from "./ui-props"
import * as p from "@clack/prompts"
import bcd from "@mdn/browser-compat-data"
import { isUndefined, toCamelCase } from "@yamada-ui/utils"
import c from "chalk"
import { writeFile } from "fs/promises"
import { glob } from "glob"
import ListIt from "list-it"
import {
  createProgram,
  isInterfaceDeclaration,
  isTypeAliasDeclaration,
} from "typescript"
import { excludeProps } from "./exclude-props"
import { generateStyles } from "./styles"

export const OUT_PATH = "packages/core/src/styles.ts"

export type CSSProperty = ReturnType<typeof getCSSProperties>[number]
export type Properties = CSSProperties | UIProperties
export type CSSProperties =
  | keyof CSS.ObsoleteProperties
  | keyof CSS.StandardProperties
  | keyof CSS.SvgProperties
export type UIProperties =
  | keyof typeof additionalProps
  | keyof typeof atRuleProps
  | keyof typeof uiProps

const omittedList = new ListIt({
  headerColor: "gray",
  headerUnderline: true,
})

const excludedList = new ListIt({
  headerColor: "gray",
  headerUnderline: true,
})

const duplicatedList = new ListIt({
  headerColor: "gray",
  headerUnderline: true,
})

const getCSSProperties = () => {
  const { css, svg } = bcd
  const cssProperties = Object.keys(css.properties as object)
  const svgAttributes = Object.keys(svg.global_attributes as object)

  const cssData = cssProperties
    .filter((property) => !/^(-moz|-webkit)/.test(property))
    .map((property) => {
      const prop = property.includes("-") ? toCamelCase(property) : property

      return {
        name: property,
        prop,
        url: css.properties?.[property]?.__compat?.mdn_url,
      }
    })

  const svgData = svgAttributes.map((attribute) => {
    const prop = attribute.includes("-") ? toCamelCase(attribute) : attribute

    return {
      name: attribute,
      prop,
      url: svg.global_attributes?.[attribute]?.__compat?.mdn_url,
    }
  })

  return [
    ...cssData,
    ...svgData.filter((attr) => !cssProperties.includes(attr.name)),
  ]
}

const getCSSTypes = async () => {
  const typeInfo: { [key: string]: { type: string; deprecated: boolean } } = {}

  const paths = await glob("node_modules/**/csstype/index.d.ts")

  const path = paths[0]

  if (!path) return typeInfo

  const { getSourceFile, getTypeChecker } = createProgram([path], {})

  const sourceFile = getSourceFile(path)
  const typeChecker = getTypeChecker()

  if (!sourceFile) return typeInfo

  const typeStatements = sourceFile.statements.filter(
    (statement) =>
      isInterfaceDeclaration(statement) || isTypeAliasDeclaration(statement),
  )

  for (const typeStatement of typeStatements) {
    const type = typeChecker.getTypeAtLocation(typeStatement)
    const symbol = type.getSymbol()
    const name = symbol?.getName()
    const deprecated = name === "ObsoleteProperties"

    if (
      name !== "StandardProperties" &&
      name !== "SvgProperties" &&
      name !== "ObsoleteProperties"
    )
      continue

    for (const property of type.getProperties()) {
      const name = property.getName()
      const type = typeChecker.getTypeOfSymbolAtLocation(property, sourceFile)
      const nonNullableType = type.getNonNullableType()
      const value = typeChecker.typeToString(nonNullableType)
      const resolvedValue =
        name === "all"
          ? `CSS.Globals`
          : `CSS.Property.${value.replace(/<.*?>$/, "")}`

      typeInfo[name] = { type: resolvedValue, deprecated }
    }
  }

  return typeInfo
}

const omitProperties = (
  cssProperties: CSSProperty[],
  typeProperties: string[],
  callback?: (message: string) => void,
) => {
  let pickedProperties: CSSProperty[] = []

  const omittedProperties = cssProperties.filter((property) => {
    const hasType = typeProperties.includes(property.prop)

    if (!hasType) pickedProperties = [...pickedProperties, property]

    return hasType
  })

  if (pickedProperties.length) {
    const table = pickedProperties.map(({ name, url }, index) => ({
      name,
      row: index + 1,
      url,
    }))

    const message = omittedList.d(table).toString()

    callback?.(message)
  }

  return omittedProperties
}

const excludeProperties = (
  cssProperties: CSSProperty[],
  callback?: (message: string) => void,
) => {
  let pickedProperties: CSSProperty[] = []

  const excludedProperties = cssProperties.filter((property) => {
    const isExclude = (excludeProps as string[]).includes(property.prop)

    if (isExclude) pickedProperties = [...pickedProperties, property]

    return !isExclude
  })

  if (pickedProperties.length) {
    const table = pickedProperties.map(({ name, url }, index) => ({
      name,
      row: index + 1,
      url,
    }))

    const message = excludedList.d(table).toString()

    callback?.(message)
  }

  return excludedProperties
}

const main = async () => {
  p.intro(c.magenta(`Generating Yamada UI styles`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    s.start(`Getting the "csstype" module`)

    const cssTypes = await getCSSTypes()

    s.stop(`Got the "csstype" module`)

    const properties = getCSSProperties()

    const typeProperties = Object.keys(cssTypes)
    const omittedProperties = omitProperties(
      properties,
      typeProperties,
      (message) => {
        p.note(message, `Omitted properties that are not present in "csstype"`)
      },
    )

    const excludedProperties = excludeProperties(
      omittedProperties,
      (message) => {
        p.note(message, `Excluded properties`)
      },
    )

    const styles = excludedProperties
      .map((property) => {
        const { type, deprecated = false } = cssTypes[property.prop] ?? {}

        if (!type) return

        return { ...property, type, deprecated }
      })
      .filter((style) => !isUndefined(style))

    s.start(`Writing file "${OUT_PATH}"`)

    const { data, pickedStyles } = await generateStyles(styles)

    await writeFile(OUT_PATH, data)

    s.stop(`Wrote file "${OUT_PATH}"`)

    if (pickedStyles.length) {
      const table = pickedStyles.map(({ name, url }, index) => ({
        name,
        row: index + 1,
        url,
      }))

      const message = duplicatedList.d(table).toString()

      p.note(message, `Duplicated properties that are present in "UIProps"`)
    }

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
