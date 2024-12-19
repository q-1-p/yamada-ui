import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ShieldX } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ShieldXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldXIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={ShieldX} className={cx("ui-lucide-icon", className)} {...rest} />
)
