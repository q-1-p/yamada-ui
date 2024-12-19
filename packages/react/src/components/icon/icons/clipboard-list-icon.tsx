import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { ClipboardList } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `ClipboardListIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClipboardListIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon
    as={ClipboardList}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
