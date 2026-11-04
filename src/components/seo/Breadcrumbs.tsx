import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: process.env.NEXT_PUBLIC_SITE_URL || 'https://suatancn.com',
      },
      ...items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: item.label,
        item: item.href
          ? `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suatancn.com'}${item.href}`
          : undefined,
      })),
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-4 text-xs sm:text-sm text-gray-500">
        <ol className="flex items-center flex-wrap gap-1 sm:gap-2">
          <li className="flex items-center">
            <Link
              href="/"
              className="text-gray-500 hover:text-green-700 flex items-center gap-1 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Trang chủ</span>
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={index} className="flex items-center gap-1 sm:gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none">
                    {item.label}
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
