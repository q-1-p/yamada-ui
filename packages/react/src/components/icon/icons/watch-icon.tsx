import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Watch } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `WatchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WatchIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Watch} className={cx("ui-lucide-icon", className)} {...rest} />
)
