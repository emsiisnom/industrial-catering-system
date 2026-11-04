import React from 'react'

interface OrganizationJsonLdProps {
  name?: string
  url?: string
  logo?: string
  phone?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
}

export function OrganizationJsonLd({
  name = 'Suất Ăn Công Nghiệp',
  url = process.env.NEXT_PUBLIC_SITE_URL || 'https://suatancn.com',
  logo = 'https://suatancn.com/images/logo.png',
  phone = '+84912345678',
  address = {
    streetAddress: 'Lô C2, Đường N2, KCN Đại Đăng',
    addressLocality: 'Thủ Dầu Một',
    addressRegion: 'Bình Dương',
    addressCountry: 'VN',
  },
}: OrganizationJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    url,
    logo,
    telephone: phone,
    priceRange: '25.000đ - 65.000đ',
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '10.9804',
      longitude: '106.6745',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    sameAs: [
      'https://www.facebook.com/suatancongnghiep',
      'https://zalo.me/0912345678',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  authorName = 'Ban Biên Tập Dinh Dưỡng Suất Ăn',
}: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  authorName?: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image: image ? [image] : undefined,
    datePublished,
    dateModified: datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Suất Ăn Công Nghiệp',
      logo: {
        '@type': 'ImageObject',
        url: 'https://suatancn.com/images/logo.png',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
