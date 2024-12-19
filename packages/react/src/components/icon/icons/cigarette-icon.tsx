import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Cigarette } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `CigaretteIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CigaretteIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Cigarette} className={cx("ui-lucide-icon", className)} {...rest} />
)
