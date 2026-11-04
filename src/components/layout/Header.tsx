"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Navigation from "./Navigation"
import MobileMenu from "./MobileMenu"
import { Phone, Menu } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm transition-shadow duration-300",
        scrolled && "shadow-md"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600 text-white font-bold text-lg">
              SA
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">
                <span className="text-primary-700">Suất Ăn</span>
                <span className="text-accent-500">CN</span>
              </span>
              <span className="text-[10px] text-gray-500 leading-tight hidden sm:block">
                Suất Ăn Công Nghiệp
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Phone - hidden on mobile */}
            <a
              href="tel:0912345678"
              className="hidden md:flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-primary-700 transition-colors"
            >
              <Phone className="h-4 w-4 text-primary-600" />
              <span>0912.345.678</span>
            </a>

            {/* CTA Button - hidden on small mobile */}
            <Button variant="accent" size="sm" className="hidden sm:inline-flex font-semibold shadow-sm" asChild>
              <Link href="/bao-gia">Báo Giá</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden inline-flex items-center justify-center p-2.5 min-w-[44px] min-h-[44px] rounded-xl text-gray-700 hover:text-primary-700 hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
              aria-label="Mở menu điều hướng"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
    </header>
  )
}

export default Header

