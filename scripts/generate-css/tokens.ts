import type { ThemeToken } from "@yamada-ui/react"
import type { CSSProperties, UIProperties } from "."

type Tokens = { [key in ThemeToken]?: (CSSProperties | UIProperties)[] }

export const tokens: Tokens = {
  animations: ["animation"],
  blurs: ["blur", "backdropBlur"],
  borders: [
    "border",
    "borderTop",
    "borderLeft",
    "borderBottom",
    "borderRight",
    "borderY",
    "borderX",
    "borderInline",
    "borderInlineStart",
    "borderInlineEnd",
    "borderBlock",
    "borderBlockStart",
    "borderBlockEnd",
    "borderImage",
  ],
  colors: [
    "color",
    "fill",
    "floodColor",
    "lightingColor",
    "stroke",
    "background",
    "backgroundColor",
    "caretColor",
    "accentColor",
    "textDecorationColor",
    "textEmphasisColor",
    "outlineColor",
    "scrollbarColor",
    "borderColor",
    "borderTopColor",
    "borderLeftColor",
    "borderBottomColor",
    "borderRightColor",
    "borderInlineColor",
    "borderInlineStartColor",
    "borderInlineEndColor",
    "borderBlockColor",
    "borderBlockStartColor",
    "borderBlockEndColor",
    "columnRuleColor",
  ],
  fonts: ["fontFamily"],
  fontSizes: ["fontSize"],
  fontWeights: ["fontWeight"],
  gradients: [
    "backgroundImage",
    "borderImageSource",
    "listStyleImage",
    "maskImage",
  ],
  letterSpacings: ["letterSpacing"],
  lineHeights: ["lineHeight"],
  radii: [
    "borderRadius",
    "borderTopRightRadius",
    "borderTopLeftRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderTopRadius",
    "borderBottomRadius",
    "borderRightRadius",
    "borderLeftRadius",
    "borderStartStartRadius",
    "borderStartEndRadius",
    "borderEndStartRadius",
    "borderEndEndRadius",
    "borderInlineStartRadius",
    "borderInlineEndRadius",
  ],
  shadows: ["boxShadow", "textShadow", "dropShadow", "backdropDropShadow"],
  sizes: [
    "width",
    "inlineSize",
    "height",
    "backfaceVisibility",
    "blockSize",
    "minWidth",
    "minInlineSize",
    "minHeight",
    "minBlockSize",
    "maxWidth",
    "maxInlineSize",
    "maxHeight",
    "maxBlockSize",
    "boxSize",
    "minBoxSize",
    "maxBoxSize",
    "flexBasis",
    "columnWidth",
    "containIntrinsicWidth",
    "gridTemplateColumns",
    "gridTemplateRows",
    "gridAutoColumns",
    "gridAutoRows",
  ],
  spaces: [
    "margin",
    "marginTop",
    "marginBlockStart",
    "marginRight",
    "marginInlineEnd",
    "marginBottom",
    "marginBlockEnd",
    "marginLeft",
    "marginInlineStart",
    "marginInline",
    "marginBlock",
    "padding",
    "paddingTop",
    "paddingBlockStart",
    "paddingRight",
    "paddingBottom",
    "paddingBlockEnd",
    "paddingLeft",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingInline",
    "paddingBlock",
    "marginY",
    "marginX",
    "paddingY",
    "paddingX",
    "gap",
    "rowGap",
    "columnGap",
    "scrollMargin",
    "scrollMarginTop",
    "scrollMarginBottom",
    "scrollMarginLeft",
    "scrollMarginRight",
    "scrollMarginX",
    "scrollMarginY",
    "scrollPadding",
    "scrollPaddingTop",
    "scrollPaddingBottom",
    "scrollPaddingLeft",
    "scrollPaddingRight",
    "scrollPaddingX",
    "scrollPaddingY",
    "inset",
    "insetX",
    "insetInline",
    "insetY",
    "insetBlock",
    "top",
    "insetBlockStart",
    "bottom",
    "insetBlockEnd",
    "left",
    "insetInlineStart",
    "right",
    "insetInlineEnd",
    "translateX",
    "translateY",
  ],
  "transitions.duration": ["animationDuration", "transitionDuration"],
  "transitions.easing": ["transitionTimingFunction", "animationTimingFunction"],
  "transitions.property": ["transitionProperty"],
  zIndices: ["zIndex"],
}

export const tokenMap = Object.entries(tokens).reduce<{
  [key in CSSProperties | UIProperties]?: ThemeToken
}>((prev, [key, list]) => {
  list.forEach((item) => {
    prev[item] = key as ThemeToken
  })

  return prev
}, {})

export const tokenPropertyMap: { [key: string]: ThemeToken[] } = {
  animation: ["animations"],
  blur: ["blurs"],
  border: ["borders"],
  color: ["colors"],
  font: ["fonts", "fontSizes", "fontWeights", "lineHeights", "letterSpacings"],
  gradient: ["gradients"],
  radius: ["radii"],
  shadow: ["shadows"],
  size: ["sizes"],
  space: ["spaces"],
  transition: [
    "transitions.property",
    "transitions.easing",
    "transitions.duration",
  ],
  zIndex: ["zIndices"],
}
