import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { GalleryHorizontalEnd } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `GalleryHorizontalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GalleryHorizontalEndIcon: FC<IconProps> = ({
  className,
  ...rest
}) => (
  <Icon
    as={GalleryHorizontalEnd}
    className={cx("ui-lucide-icon", className)}
    {...rest}
  />
)
