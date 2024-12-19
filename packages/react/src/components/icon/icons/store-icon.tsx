import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Store } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `StoreIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StoreIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Store} className={cx("ui-lucide-icon", className)} {...rest} />
)
