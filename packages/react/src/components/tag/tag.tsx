import type { MouseEventHandler, ReactNode } from "react"
import type { HTMLUIProps, ThemeProps } from "../../core"
import type { TagStyle } from "./tag.style"
import { useMemo, useRef } from "react"
import { createSlotComponent, ui } from "../../core"
import { useClickable } from "../../hooks/use-clickable"
import { dataAttr } from "../../utils"
import { XIcon } from "../icon"
import { tagStyle } from "./tag.style"

export interface TagContext extends Pick<TagProps, "disabled"> {}

export interface TagProps extends HTMLUIProps<"span">, ThemeProps<TagStyle> {
  /**
   * Icon to be displayed to the end of the tag.
   */
  endIcon?: ReactNode
  /**
   * Icon to be displayed to the start of the tag.
   */
  startIcon?: ReactNode
  /**
   * Props for tag close button element.
   */
  closeButtonProps?: TagCloseButtonProps
  /**
   * Props for content element.
   */
  contentProps?: TagContentProps
  /**
   * Props for icon element.
   */
  iconProps?: HTMLUIProps<"span">
  /**
   * Function to be executed when the close button is clicked.
   */
  onClose?: MouseEventHandler<HTMLElement>
}

export const {
  ComponentContext: TagContext,
  PropsContext: TagPropsContext,
  useComponentContext: useTagContext,
  usePropsContext: useTagPropsContext,
  withContext,
  withProvider,
} = createSlotComponent<TagProps, TagStyle, TagContext>("tag", tagStyle)

/**
 * `Tag` is a component used to categorize or organize items using keywords that describe them.
 *
 * @see Docs https://yamada-ui.com/components/data-display/tag
 */
export const Tag = withProvider(
  ({
    children,
    disabled,
    endIcon,
    startIcon,
    closeButtonProps,
    contentProps,
    iconProps,
    onClose,
    ...rest
  }) => {
    const context = useMemo(() => ({ disabled }), [disabled])

    return (
      <TagContext value={context}>
        <ui.span data-disabled={dataAttr(disabled)} {...rest}>
          {startIcon ? (
            <TagStartIcon {...iconProps}>{startIcon}</TagStartIcon>
          ) : null}

          {children ? (
            <TagContent {...contentProps}>{children}</TagContent>
          ) : null}

          {endIcon ? <TagEndIcon {...iconProps}>{endIcon}</TagEndIcon> : null}

          {onClose ? (
            <TagCloseButton
              disabled={disabled}
              onClick={onClose}
              {...closeButtonProps}
            />
          ) : null}
        </ui.span>
      </TagContext>
    )
  },
  "root",
  { transferProps: ["disabled"] },
)()

export interface TagContentProps extends HTMLUIProps<"span"> {}

export const TagContent = withContext<"span", TagContentProps>(
  "span",
  "content",
)(undefined, (props) => {
  const { disabled } = useTagContext()

  return { "data-disabled": dataAttr(disabled), ...props }
})

export interface TagStartIconProps extends HTMLUIProps<"span"> {}

export const TagStartIcon = withContext<"span", TagStartIconProps>("span", [
  "icon",
  "startIcon",
])(undefined, (props) => {
  const { disabled } = useTagContext()

  return { "data-disabled": dataAttr(disabled), ...props }
})

export interface TagEndIconProps extends HTMLUIProps<"span"> {}

export const TagEndIcon = withContext<"span", TagEndIconProps>("span", [
  "icon",
  "endIcon",
])(undefined, (props) => {
  const { disabled } = useTagContext()

  return { "data-disabled": dataAttr(disabled), ...props }
})

export interface TagCloseButtonProps extends HTMLUIProps<"span"> {
  disabled?: boolean
}

export const TagCloseButton = withContext<"span", TagCloseButtonProps>("span", [
  "icon",
  "closeButton",
])(undefined, ({ children, ...props }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const rest = useClickable<HTMLSpanElement>({ ref, ...props })

  return { "aria-label": "Close tag", children: children || <XIcon />, ...rest }
})
