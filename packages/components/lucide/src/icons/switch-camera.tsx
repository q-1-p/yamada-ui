import { forwardRef } from "@yamada-ui/core"
import { SwitchCamera as SwitchCameraIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `SwitchCamera` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SwitchCamera = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SwitchCameraIcon} {...props} />
))
