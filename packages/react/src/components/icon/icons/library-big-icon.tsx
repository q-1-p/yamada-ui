import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { LibraryBig } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `LibraryBigIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LibraryBigIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={LibraryBig} className={cx("ui-lucide-icon", className)} {...rest} />
)
