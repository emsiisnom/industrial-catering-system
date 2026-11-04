"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { navItems } from "./Navigation"
import {
  Phone,
  Home,
  Info,
  Utensils,
  Newspaper,
  Users,
  HelpCircle,
  Mail,
  ChevronRight,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const navIcons: Record<string, any> = {
  "/": Home,
  "/gioi-thieu": Info,
  "/dich-vu": Utensils,
  "/thuc-don": Utensils,
  "/tin-tuc": Newspaper,
  "/khach-hang": Users,
  "/cau-hoi-thuong-gap": HelpCircle,
  "/lien-he": Mail,
}

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[85vw] max-w-[360px] p-0 flex flex-col h-full bg-white">
        <SheetClose onClose={() => onOpenChange(false)} />
        
        {/* Drawer Header (Fixed at top) */}
        <div className="shrink-0 p-5 pb-4 border-b border-gray-100 pr-14">
          <SheetTitle>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-600 text-white font-bold text-sm flex items-center justify-center">
                SA
              </div>
              <div>
                <span className="text-primary-700 font-bold text-lg">Suất Ăn</span>
                <span className="text-accent-500 font-bold text-lg">CN</span>
              </div>
            </div>
          </SheetTitle>
        </div>

        {/* Nav List (Scrollable middle area) */}
        <nav className="flex-1 overflow-y-auto p-3 min-h-0">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              const Icon = navIcons[item.href] || ChevronRight

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => onOpenChange(false)}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-3 text-sm font-medium rounded-xl transition-all min-h-[46px]",
                      isActive
                        ? "text-primary-700 bg-primary-50 font-semibold"
                        : "text-gray-700 hover:text-primary-700 hover:bg-gray-50 active:bg-gray-100"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={cn("w-4 h-4 shrink-0", isActive ? "text-primary-600" : "text-gray-400")} />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className={cn("w-4 h-4 text-gray-300", isActive && "text-primary-600")} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Drawer Footer Actions (Fixed at bottom) */}
        <div className="shrink-0 p-5 border-t border-gray-100 bg-gray-50/70 space-y-3">
          <a
            href="tel:0912345678"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-primary-700 bg-white border border-primary-200 rounded-xl hover:bg-primary-50 transition-colors shadow-sm min-h-[44px]"
          >
            <Phone className="h-4 w-4 text-primary-600" />
            <span>Hotline: 0912.345.678</span>
          </a>
          <Button variant="accent" size="lg" className="w-full text-base font-bold shadow-md min-h-[46px]" asChild>
            <Link href="/bao-gia" onClick={() => onOpenChange(false)}>
              Nhận Báo Giá Miễn Phí
            </Link>
          </Button>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-primary-600" />
            <span>Tiêu chuẩn ISO 22000 & HACCP</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
