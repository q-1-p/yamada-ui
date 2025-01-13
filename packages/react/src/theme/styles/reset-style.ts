import type { CSSObject } from "../../core"

export const resetStyle: CSSObject = {
  "*, *::before, *::after": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  "::-webkit-file-upload-button": {
    font: "inherit",
    WebkitAppearance: "button",
  },

  ":where([hidden]:not([hidden='until-found']))": {
    display: "none !important",
  },

  "input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button":
    { display: "none", height: "auto" },

  "input[type='search']": {
    outlineOffset: "-2px",
    WebkitAppearance: "textfield",
  },

  "::-webkit-search-decoration, ::-webkit-search-cancel-button": {
    WebkitAppearance: "none",
  },

  ":where(a)": {
    color: "inherit",
    textDecoration: "inherit",
    textUnderlineOffset: "0.2ex",
  },

  "abbr:where([title])": {
    textDecoration: "underline dotted",
  },

  ":where(body)": {
    lineHeight: "inherit",
  },

  "b, strong": {
    fontWeight: "bolder",
  },

  ":where(button, label, select, summary, [role='button'], [role='option'])": {
    cursor: "pointer",
  },

  "button, [type='button'], [type='reset'], [type='submit']": {
    WebkitAppearance: "button",
  },

  ":where(button, input, select, textarea)": {
    backgroundColor: "transparent",
    color: "inherit",
    font: "inherit",
    fontFeatureSettings: "inherit",
    fontVariationSettings: "inherit",
    letterSpacing: "inherit",
    outline: 0,
    wordSpacing: "inherit",
  },

  "button, select": {
    textTransform: "none",
  },

  ":-moz-ui-invalid": {
    boxShadow: "none",
  },

  ":-moz-focusring": {
    outline: "auto",
  },

  ":where(:disabled, label:has(> :disabled, + disabled))": {
    cursor: "not-allowed",
  },

  "code, kbd, samp, pre": {
    "--font-mono-fallback":
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'",
    fontFamily: "var(--global-font-mono, var(--font-mono-fallback))",
    fontSize: "1em",
  },

  ":where(img, svg, video, canvas, audio, iframe, embed, object)": {
    display: "block",
    verticalAlign: "middle",
  },

  ":where(p, h1, h2, h3, h4, h5, h6)": {
    fontSize: "inherit",
    fontWeight: "inherit",
    overflowWrap: "break-word",
  },

  ":where(h1, h2, h3)": {
    lineHeight: "calc(1em + 0.5rem)",
    textWrap: "balance",
  },

  ":where(hr)": {
    blockSize: 0,
    border: "none",
    borderBlockStart: "1px solid",
    color: "inherit",
    overflow: "visible",
  },

  ":where(html)": {
    colorScheme: "dark light",
    "--font-fallback":
      "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontFamily: "var(--global-font-body, var(--font-fallback))",
    interpolateSize: "allow-keywords",
    lineHeight: 1.5,
    MozOsxFontSmoothing: "grayscale",
    scrollbarGutter: "stable",
    tabSize: 4,
    WebkitFontSmoothing: "antialiased",
    WebkitTextSizeAdjust: "100%",
  },

  "a:not([class])": {
    color: "currentColor",
    textDecorationSkipInk: "auto",
  },

  progress: {
    verticalAlign: "baseline",
  },

  ":where(html:has(dialog:modal[open]))": {
    overflow: "clip",
  },

  small: {
    fontSize: "80%",
  },

  sub: {
    bottom: "-0.25em",
  },

  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },

  summary: {
    display: "list-item",
  },

  sup: {
    top: "-0.5em",
  },

  table: {
    borderCollapse: "collapse",
    borderColor: "inherit",
    textIndent: "0px",
  },

  ":where(textarea)": {
    resize: "vertical",
  },

  ":where(ul, ol)": {
    listStyle: "none",
  },

  "@media (prefers-reduced-motion: no-preference)": {
    ":where(html:focus-within)": {
      scrollBehavior: "smooth",
    },
  },

  ":where(dialog, [popover])": {
    background: "none",
    border: "none",
    color: "inherit",
    inset: "unset",
    maxHeight: "unset",
    maxWidth: "unset",
    overflow: "unset",
  },

  ":where(dialog:not([open], [popover]), [popover]:not(:popover-open))": {
    display: "none !important",
  },

  ":where(.visually-hidden:not(:focus-within, :active))": {
    border: "0 !important",
    clipPath: "inset(50%) !important",
    height: "1px !important",
    overflow: "hidden !important",
    position: "absolute",
    userSelect: "none",
    whiteSpace: "nowrap !important",
    width: "1px !important",
  },
}
