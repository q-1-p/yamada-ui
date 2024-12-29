import type { HTMLUIProps, ThemeProps } from "../../core"
import type { SeparatorStyle } from "./separator.style"
import { createComponent } from "../../core"
import { separatorStyle } from "./separator.style"

export interface SeparatorProps
  extends HTMLUIProps<"hr">,
    ThemeProps<SeparatorStyle> {}

export const {
  PropsContext: SeparatorPropsContext,
  usePropsContext: useSeparatorPropsContext,
  withContext,
} = createComponent<SeparatorProps, SeparatorStyle>("separator", separatorStyle)

/**
 * `Separator` is a component that represents a division between elements.
 *
 * @see Docs https://yamada-ui.com/components/layouts/separator
 */
export const Separator = withContext("hr")()
