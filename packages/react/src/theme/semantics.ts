import type { ThemeSemantics } from "../core"

const grayColors = Object.fromEntries(
  ["gray", "neutral"].map((c) => [
    c,
    {
      contrast: ["white", "white"],
      default: `${c}.500`,
      emphasized: [`${c}.300`, `${c}.700`],
      fg: [`${c}.700`, `${c}.50`],
      muted: [`${c}.200`, `${c}.800`],
      outline: [`${c}.800`, `${c}.200`],
      solid: [`${c}.400`, `${c}.700`],
      subtle: [`${c}.50`, `${c}.900`],
    },
  ]),
)

const a11yColors = Object.fromEntries(
  ["yellow", "lime", "cyan", "amber"].map((c) => [
    c,
    {
      contrast: ["black", "black"],
      default: `${c}.500`,
      emphasized: [`${c}.300`, `${c}.700`],
      fg: [`${c}.800`, `${c}.200`],
      muted: [`${c}.200`, `${c}.800`],
      outline: [`${c}.600`, `${c}.600`],
      solid: [`${c}.300`, `${c}.300`],
      subtle: [`${c}.50`, `${c}.900`],
    },
  ]),
)

const commonColors = Object.fromEntries(
  [
    "red",
    "rose",
    "pink",
    "flashy",
    "orange",
    "green",
    "emerald",
    "teal",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
  ].map((c) => [
    c,
    {
      contrast: ["white", "white"],
      default: `${c}.500`,
      emphasized: [`${c}.200`, `${c}.700`],
      fg: [`${c}.800`, `${c}.200`],
      muted: [`${c}.100`, `${c}.800`],
      outline: [`${c}.600`, `${c}.600`],
      solid: [`${c}.600`, `${c}.600`],
      subtle: [`${c}.50`, `${c}.900`],
    },
  ]),
)

export const semantics: ThemeSemantics = {
  colors: {
    ...grayColors,
    ...a11yColors,
    ...commonColors,
    black: {
      contrast: "white",
      default: "#000000",
      emphasized: "black.300",
      fg: "black.800",
      muted: "black.200",
      outline: "black.900",
      solid: "black",
      subtle: "black.100",
    },
    bg: {
      contrast: ["black", "white"],
      default: ["white", "black"],
      emphasized: ["black.300", "white.300"],
      error: ["error.50", "error.950"],
      info: ["info.50", "info.950"],
      muted: ["black.200", "white.200"],
      panel: ["black.50", "white.50"],
      subtle: ["black.100", "white.100"],
      success: ["success.50", "success.950"],
      warning: ["warning.50", "warning.950"],
    },
    border: {
      contrast: ["black", "white"],
      default: ["black.200", "white.200"],
      emphasized: ["black.300", "white.300"],
      error: ["error.500", "error.500"],
      info: ["info.500", "info.500"],
      muted: ["black.200", "white.200"],
      subtle: ["black.100", "white.100"],
      success: ["success.500", "success.500"],
      warning: ["warning.500", "warning.500"],
    },
    current: "currentColor",
    fg: {
      contrast: ["white", "black"],
      default: "mono",
      emphasized: ["black.700", "white.700"],
      error: ["error.500", "error.500"],
      info: ["info.500", "info.500"],
      muted: ["black.600", "white.600"],
      subtle: ["black.500", "white.500"],
      success: ["success.500", "success.500"],
      warning: ["warning.500", "warning.500"],
    },
    transparent: "transparent",
    white: {
      contrast: "black",
      default: "#FFFFFF",
      emphasized: "white.400",
      fg: "white.900",
      muted: "white.300",
      outline: "white.900",
      solid: "white",
      subtle: "white.200",
    },
  },
  colorSchemes: {
    error: "red",
    info: "blue",
    link: "blue",
    mono: ["black", "white"],
    primary: "blue",
    secondary: "violet",
    success: "green",
    warning: "orange",
  },
  spaces: {
    xs: "1",
    sm: "2",
    md: "4",
    normal: "6",
    lg: "8",
    xl: "12",
    "2xl": "16",
    "3xl": "24",
    "4xl": "32",
  },
}
