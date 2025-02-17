import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { FileBadge2 as OriginalFileBadge2 } from "lucide-react"

/**
 * `FileBadge2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FileBadge2Icon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalFileBadge2}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `FileBadge2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `FileBadge2Icon` instead.
 */
export const FileBadge2 = FileBadge2Icon
