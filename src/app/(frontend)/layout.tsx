import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MobileFloatingActions } from '@/components/layout/MobileFloatingActions'

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Suất Ăn Công Nghiệp - Dịch Vụ Suất Ăn Doanh Nghiệp Chất Lượng Cao',
    template: '%s | Suất Ăn Công Nghiệp',
  },
  description:
    'Cung cấp suất ăn công nghiệp chất lượng cao cho doanh nghiệp, nhà máy, khu công nghiệp. Thực đơn đa dạng, vệ sinh an toàn thực phẩm, giá cả hợp lý.',
  keywords: [
    'suất ăn công nghiệp',
    'suất ăn doanh nghiệp',
    'suất ăn nhà máy',
    'dịch vụ nấu ăn công nghiệp',
    'cung cấp suất ăn',
    'suất ăn khu công nghiệp',
    'suất ăn văn phòng',
    'catering công nghiệp',
  ],
  authors: [{ name: 'Suất Ăn Công Nghiệp' }],
  creator: 'Suất Ăn Công Nghiệp',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://suatancn.com'),
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'Suất Ăn Công Nghiệp',
    title: 'Suất Ăn Công Nghiệp - Dịch Vụ Suất Ăn Doanh Nghiệp Chất Lượng Cao',
    description:
      'Cung cấp suất ăn công nghiệp chất lượng cao cho doanh nghiệp, nhà máy, khu công nghiệp.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className="font-sans antialiased overflow-x-hidden min-w-[320px]">
        <div className="flex min-h-screen flex-col bg-white">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileFloatingActions />
        </div>
      </body>
    </html>
  )
}
