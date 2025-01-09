import { defineComponentSlotStyle } from "../../core"

export const alertStyle = defineComponentSlotStyle({
  base: {
    description: {
      lineHeight: "5",
    },
    icon: {
      boxSize: "5",
      flexShrink: 0,
      marginEnd: "3",
    },
    loading: {
      flexShrink: 0,
      fontSize: "xl",
      marginEnd: "3",
    },
    root: {
      alignItems: "center",
      display: "flex",
      overflow: "hidden",
      position: "relative",
      px: "4",
      py: "3",
      rounded: "md",
      w: "full",
    },
    title: {
      display: "block",
      fontWeight: "bold",
      lineHeight: "5",
      marginEnd: "2",
    },
  },

  variants: {
    basic: {
      icon: {
        color: "colorScheme.solid",
      },
      root: {
        bg: "bg",
        borderWidth: "1px",
      },
    },
    island: {
      icon: { color: "colorScheme.solid" },
      root: {
        bg: "bg",
        borderWidth: "1px",
        pl: 7,
        _before: {
          bg: "colorScheme.solid",
          h: "calc(100% - $sizes.5)",
          left: "3",
          position: "absolute",
          rounded: "full",
          top: "50%",
          transform: "translateY(-50%)",
          w: 1,
        },
      },
    },
    solid: {
      icon: {
        textStyle: "solid",
      },
      root: {
        layerStyle: "solid",
      },
    },
    subtle: {
      icon: {
        textStyle: "subtle",
      },
      root: {
        layerStyle: "subtle",
      },
    },
    surface: {
      icon: {
        textStyle: "surface",
      },
      root: {
        layerStyle: "surface",
      },
    },
  },

  defaultProps: {
    variant: "basic",
  },
})

export type AlertStyle = typeof alertStyle
