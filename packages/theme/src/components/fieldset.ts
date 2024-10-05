import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { FormControl } from "./form-control"

export const Fieldset: ComponentMultiStyle<"Fieldset"> = mergeMultiStyle(
  FormControl,
  {
    baseStyle: {
      legend: {
        _disabled: {
          opacity: 0.4,
        },
        display: "block",
        fontSize: "md",
        fontWeight: "medium",
        mb: "2",
        me: "3",
        opacity: 1,
        transitionDuration: "normal",
        transitionProperty: "common",
      },
    },
  },
)({ omit: ["label"] })
