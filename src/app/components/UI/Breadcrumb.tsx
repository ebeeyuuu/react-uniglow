import * as React from "react"
import { MdChevronRight, MdMoreHoriz } from "react-icons/md"

type BreadcrumbProps = React.ComponentPropsWithoutRef<"nav"> & {
  separator?: React.ReactNode
}

type BreadcrumbListProps = React.ComponentPropsWithoutRef<"ol">

type BreadcrumbItemProps = React.ComponentPropsWithoutRef<"li">

type BreadcrumbLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  isCurrentPage?: boolean
}

type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<"li">

type BreadcrumbEllipsisProps = React.ComponentPropsWithoutRef<"span">

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, separator, ...props }, ref) => (
    <nav
      ref={ref}
      aria-label="breadcrumb"
      className={`${className || ""}`}
      {...props}
    />
  )
)
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={`flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5 ${
        className || ""
      }`}
      {...props}
    />
  )
)
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={`inline-flex items-center gap-1.5 ${className || ""}`}
      {...props}
    />
  )
)
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, isCurrentPage, ...props }, ref) => {
    const Comp = isCurrentPage ? "span" : "a"

    return (
      <Comp
        ref={ref}
        className={`transition-colors hover:text-foreground ${
          isCurrentPage
            ? "font-normal text-foreground pointer-events-none"
            : ""
        } ${className || ""}`}
        {...(isCurrentPage
          ? { "aria-current": "page" as const, role: "link", "aria-disabled": true }
          : {})}
        {...props}
      />
    )
  }
)
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbSeparator = React.forwardRef<
  HTMLLIElement,
  BreadcrumbSeparatorProps
>(({ children, className, ...props }, ref) => (
  <li
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={`[&>svg]:w-3.5 [&>svg]:h-3.5 ${className || ""}`}
    {...props}
  >
    {children ?? <MdChevronRight />}
  </li>
))
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

const BreadcrumbEllipsis = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbEllipsisProps
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="presentation"
    aria-hidden="true"
    className={`flex h-9 w-9 items-center justify-center ${className || ""}`}
    {...props}
  >
    <MdMoreHoriz className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
))
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis"

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

