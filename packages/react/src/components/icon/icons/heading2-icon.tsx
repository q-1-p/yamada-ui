import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Heading2 } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `Heading2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Heading2Icon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Heading2} className={cx("ui-lucide-icon", className)} {...rest} />
)
