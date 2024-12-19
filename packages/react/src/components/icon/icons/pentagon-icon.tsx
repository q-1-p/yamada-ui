import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Pentagon } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PentagonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PentagonIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Pentagon} className={cx("ui-lucide-icon", className)} {...rest} />
)
