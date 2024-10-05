import { existsSync, mkdirSync, writeFileSync } from "fs"
import path from "path"
import { MDX_PATH } from "./utils"

function generateMDXPackageJSON() {
  const packageJSON = {
    name: "yamada-mdx",
    description: "This package is auto-generated by Yamada MDX",
    main: "index.js",
    types: "index.d.ts",
    version: "0.1.0",
  }

  writeFileSync(
    path.join(MDX_PATH, `package.json`),
    JSON.stringify(packageJSON),
  )
}

function generateMDXIndexJS() {
  const indexJS = [
    `import documentMap from "./map"`,
    `import documentPaths from "./paths"`,
    ``,
    `export { documentMap, documentPaths }`,
  ].join("\n")

  writeFileSync(path.join(MDX_PATH, `index.js`), indexJS)
}

function generateMDXIndexTS() {
  const indexTS = [
    `export type FrontMatter = {`,
    `  title: string`,
    `  description: string`,
    `  order: number`,
    `  is_active: boolean`,
    `  table_of_contents_max_lv?: number`,
    `  is_tabs?: boolean`,
    `  with_table_of_contents?: boolean`,
    `  with_children?: boolean`,
    `  with_children_description?: boolean`,
    `  with_description?: boolean`,
    `  menu?: string`,
    `  tab?: string`,
    `  label?: string`,
    `  tags?: string[]`,
    `  menu_icon?: string`,
    `  version?: string`,
    `  package_name?: string`,
    `  release_url?: string`,
    `  release_date?: string`,
    `}`,
    ``,
    `export type DocumentLevel = 1 | 2 | 3`,
    ``,
    `export type DocumentContent = { id: string; lv: DocumentLevel; title: string }`,
    ``,
    `export type Document = FrontMatter & {`,
    `  body: string`,
    `  paths: string[]`,
    `  slug: string`,
    `  is_expanded: boolean`,
    `  edit_url: string`,
    `  contents: DocumentContent[]`,
    `}`,
    ``,
    `export type DocumentMap = Record<string, Record<string, Document>>`,
    ``,
    `export type DocumentPaths = string[]`,
    ``,
    `export declare const documentMap: DocumentMap`,
    `export declare const documentPaths: DocumentPaths`,
  ].join("\n")

  writeFileSync(path.join(MDX_PATH, `index.d.ts`), indexTS)
}

export function initMDX() {
  if (!existsSync(MDX_PATH)) mkdirSync(MDX_PATH)

  generateMDXPackageJSON()
  generateMDXIndexJS()
  generateMDXIndexTS()
}
