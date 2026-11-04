"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface SheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

interface SheetContentProps {
  children: React.ReactNode
  className?: string
  side?: "left" | "right"
}

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  if (!open || !mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[999] pointer-events-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
        onClick={() => onOpenChange(false)}
        aria-hidden="true"
      />
      {children}
    </div>,
    document.body
  )
}

export function SheetContent({ children, className, side = "right" }: SheetContentProps) {
  return (
    <div
      className={cn(
        "fixed top-0 bottom-0 z-[1000] h-full h-dvh w-[85vw] max-w-[360px] bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col",
        side === "right" ? "right-0 animate-in slide-in-from-right" : "left-0 animate-in slide-in-from-left",
        className
      )}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  )
}

export function SheetHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col space-y-2 p-5 pb-0", className)}>
      {children}
    </div>
  )
}

export function SheetTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("text-lg font-semibold text-gray-900", className)}>
      {children}
    </div>
  )
}

export function SheetClose({ onClose, className }: { onClose: () => void; className?: string }) {
  return (
    <button
      onClick={onClose}
      className={cn(
        "absolute right-4 top-4 rounded-xl p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 z-10 min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer",
        className
      )}
      aria-label="Đóng menu"
    >
      <X className="h-5 w-5" />
    </button>
  )
}
