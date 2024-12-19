import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { RotateCw } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `RotateCwIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCwIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={RotateCw} className={cx("ui-lucide-icon", className)} {...rest} />
)
