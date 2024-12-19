import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { BadgeInfo } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `BadgeInfoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeInfoIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={BadgeInfo} className={cx("ui-lucide-icon", className)} {...rest} />
)
