import type { FC } from "../../../core"
import type { IconProps } from "../icon"
import { Podcast } from "lucide-react"
import { cx } from "../../../utils"
import { Icon } from "../icon"

/**
 * `PodcastIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PodcastIcon: FC<IconProps> = ({ className, ...rest }) => (
  <Icon as={Podcast} className={cx("ui-lucide-icon", className)} {...rest} />
)
