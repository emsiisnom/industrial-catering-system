import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function NavigationMenu({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <nav className={cn("flex items-center", className)}>
      {children}
    </nav>
  )
}

export function NavigationMenuList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {children}
    </ul>
  )
}

export function NavigationMenuItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <li className={cn("", className)}>
      {children}
    </li>
  )
}

export function NavigationMenuLink({
  href,
  children,
  className,
  active,
}: {
  href: string
  children: React.ReactNode
  className?: string
  active?: boolean
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors",
        active
          ? "text-primary-700 bg-primary-50"
          : "text-gray-600 hover:text-primary-700 hover:bg-gray-50",
        className
      )}
    >
      {children}
    </Link>
  )
}
