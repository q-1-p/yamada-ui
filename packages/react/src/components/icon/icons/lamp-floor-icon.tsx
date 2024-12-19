import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LampFloor } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LampFloorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LampFloorIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LampFloor} className={cx("ui-lucide-icon", className)} {...rest} />
)
