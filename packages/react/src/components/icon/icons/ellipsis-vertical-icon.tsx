import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { EllipsisVertical } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `EllipsisVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const EllipsisVerticalIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={EllipsisVertical}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
