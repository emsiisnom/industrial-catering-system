'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, FileText, ArrowUp } from 'lucide-react'

export function MobileFloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="md:hidden fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-gray-900/80 text-white flex items-center justify-center shadow-md backdrop-blur-sm transition-all hover:bg-gray-900 active:scale-95 cursor-pointer"
          aria-label="Lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Báo giá nhanh */}
      <Link
        href="/bao-gia"
        className="flex items-center gap-1.5 bg-orange-500 text-white text-xs font-bold px-3 py-2 rounded-full shadow-lg shadow-orange-500/30 active:scale-95 transition-transform"
      >
        <FileText className="w-3.5 h-3.5" />
        <span>Báo giá 30p</span>
      </Link>

      {/* Zalo Chat */}
      <a
        href="https://zalo.me"
        target="_blank"
        rel="noopener noreferrer"
        className="w-11 h-11 rounded-full bg-[#0068ff] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 active:scale-95 transition-transform"
        aria-label="Chat Zalo"
      >
        <MessageCircle className="w-5 h-5" />
      </a>

      {/* Call Hotline with pulse */}
      <a
        href="tel:0912345678"
        className="relative w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg shadow-green-600/40 active:scale-95 transition-transform"
        aria-label="Gọi hotline 0912.345.678"
      >
        <span className="absolute -inset-1 rounded-full bg-green-500 opacity-40 animate-ping pointer-events-none" />
        <Phone className="w-5 h-5 relative z-10" />
      </a>
    </div>
  )
}
