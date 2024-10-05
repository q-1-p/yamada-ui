import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Reorder: ComponentMultiStyle<"Reorder"> = {
  baseStyle: {
    container: {
      w: "100%",
    },
    item: {
      _selected: {
        boxShadow: ["md", "dark-md"],
      },
      h: "100%",
      w: "100%",
    },
    trigger: {
      color: ["blackAlpha.300", "whiteAlpha.300"],
    },
  },

  sizes: {
    sm: {
      item: { p: "sm", rounded: "base" },
    },
    md: {
      item: { p: "md", rounded: "md" },
    },
    normal: {
      item: { p: "normal", rounded: "lg" },
    },
    lg: {
      item: { p: "lg", rounded: "xl" },
    },
  },

  variants: {
    elevated: {
      item: {
        bg: ["white", "black"],
        boxShadow: ["base", "dark-md"],
      },
    },
    outline: {
      item: {
        bg: ["white", "black"],
        borderWidth: "1px",
      },
    },
    unstyled: {
      item: { _selected: { boxShadow: "unset" }, p: 0, rounded: 0 },
    },
  },

  defaultProps: {
    size: "md",
    variant: "outline",
  },
}
