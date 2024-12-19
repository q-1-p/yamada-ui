import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { MoveHorizontal } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `MoveHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveHorizontalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={MoveHorizontal}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
