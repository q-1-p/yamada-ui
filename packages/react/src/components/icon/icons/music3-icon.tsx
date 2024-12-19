import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Music3 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Music3Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Music3Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Music3} className={cx("ui-lucide-icon", className)} {...rest} />
)
