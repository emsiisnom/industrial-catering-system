import React from 'react'
import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { WeeklyMenuPreview } from '@/components/sections/WeeklyMenuPreview'
import { LatestNewsSection } from '@/components/sections/LatestNewsSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ClientLogosSection } from '@/components/sections/ClientLogosSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'
import { OrganizationJsonLd } from '@/components/seo/JsonLd'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Suất Ăn Công Nghiệp Chuẩn ISO 22000 | Báo Giá Nhanh Cho Doanh Nghiệp',
  description:
    'Chuyên cung cấp dịch vụ suất ăn công nghiệp cho nhà máy, khu công nghiệp, văn phòng với quy mô 200 - 15.000 suất/ngày. Tiêu chuẩn HACCP, lưu mẫu 24h, bảo hiểm 20 tỷ.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <WeeklyMenuPreview />
      <LatestNewsSection />
      <CertificationsSection />
      <ClientLogosSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
