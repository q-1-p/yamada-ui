import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { WalletCards as OriginalWalletCards } from "lucide-react"

/**
 * `WalletCardsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const WalletCardsIcon = forwardRef<IconProps, "svg">(
  ({ className, ...rest }, ref) => (
    <Icon
      ref={ref}
      as={OriginalWalletCards}
      className={cx("ui-lucide-icon", className)}
      {...rest}
    />
  ),
)

/**
 * `WalletCards` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `WalletCardsIcon` instead.
 */
export const WalletCards = WalletCardsIcon
