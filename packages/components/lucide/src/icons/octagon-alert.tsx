import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { OctagonAlert as OriginalOctagonAlert } from "lucide-react"

/**
 * `OctagonAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonAlertIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalOctagonAlert}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `OctagonAlert` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `OctagonAlertIcon` instead.
 */
export const OctagonAlert = OctagonAlertIcon
