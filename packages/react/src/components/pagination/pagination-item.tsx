import type { ReactNode } from "react"
import type { HTMLUIProps } from "../../core"
import { forwardRef, ui } from "../../core"
import { cx, dataAttr } from "../../utils"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  EllipsisIcon,
} from "../icon"
import { Ripple, useRipple } from "../ripple"
import { usePaginationContext } from "./use-pagination"

interface PaginationItemOptions {
  /**
   * The type of the page or item assigned to the pagination item.
   */
  page: "ellipsis" | "first" | "last" | "next" | "prev" | number
  /**
   * If `true`, the pagination item will be activated.
   *
   * @default false
   */
  active?: boolean
  /**
   * If `true`, the pagination item will be disabled.
   *
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, disable ripple effects when pressing a element.
   *
   * @default false
   */
  disableRipple?: boolean
}

export interface PaginationItemProps
  extends Omit<HTMLUIProps<"button">, "page">,
    PaginationItemOptions {}

const iconMap: {
  [key in "ellipsis" | "first" | "last" | "next" | "prev" | number]: ReactNode
} = {
  ellipsis: <EllipsisIcon />,
  first: <ChevronsLeftIcon />,
  last: <ChevronsRightIcon />,
  next: <ChevronRightIcon />,
  prev: <ChevronLeftIcon />,
}

export const PaginationItem = forwardRef<PaginationItemProps, "button">(
  (
    {
      className,
      active,
      page,
      children = iconMap[page] ?? page,
      disabled,
      disableRipple,
      ...rest
    },
    ref,
  ) => {
    const styles = usePaginationContext()
    const ellipsis = page === "ellipsis"
    const { onPointerDown, ...rippleProps } = useRipple({
      ...rest,
      disabled: disableRipple || disabled || ellipsis,
    })

    const Component = ui[ellipsis ? "span" : "button"]

    return (
      <Component
        ref={ref}
        {...(!ellipsis
          ? {
              type: "button",
              "data-disabled": dataAttr(disabled),
              "data-selected": dataAttr(active),
              disabled,
            }
          : {})}
        className={cx(
          "ui-pagination__item",
          ellipsis ? "ui-pagination__item--ellipsis" : undefined,
          className,
        )}
        tabIndex={!ellipsis ? 0 : -1}
        __css={{
          ...styles.item,
          ...styles[page],
        }}
        {...rest}
        onPointerDown={onPointerDown}
      >
        {children}

        <Ripple {...rippleProps} />
      </Component>
    )
  },
)

PaginationItem.displayName = "PaginationItem"
PaginationItem.__ui__ = "PaginationItem"
