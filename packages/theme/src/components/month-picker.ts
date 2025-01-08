import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
import { DatePicker } from "./date-picker"

export const MonthPicker: ComponentMultiStyle<"MonthPicker"> = mergeMultiStyle(
  DatePicker,
  {
    baseStyle: {
      container: {
        h: "fit-content",
        w: "100%",
      },
    },
  },
)()
