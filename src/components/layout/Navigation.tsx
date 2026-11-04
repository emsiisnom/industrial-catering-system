"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Thực đơn", href: "/thuc-don" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Khách hàng", href: "/khach-hang" },
  { label: "FAQ", href: "/cau-hoi-thuong-gap" },
  { label: "Liên hệ", href: "/lien-he" },
]

export { navItems }

export function Navigation({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav className={cn("hidden lg:flex items-center", className)}>
      <ul className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href)

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "inline-flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  isActive
                    ? "text-primary-700 bg-primary-50"
                    : "text-gray-600 hover:text-primary-700 hover:bg-gray-50"
                )}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation

