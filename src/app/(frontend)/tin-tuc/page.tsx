import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { getLatestPosts } from '@/lib/payload-utils'
import { samplePosts } from '@/data/sample-posts'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const categoryLabels: Record<string, string> = {
  'tin-cong-ty': 'Tin công ty',
  'an-toan-thuc-pham': 'An toàn thực phẩm',
  'dinh-duong': 'Dinh dưỡng',
  'khuyen-mai': 'Khuyến mãi',
  'tuyen-dung': 'Tuyển dụng',
  'kien-thuc': 'Kiến thức',
}

export const metadata: Metadata = {
  title: 'Tin Tức & Kiến Thức Vệ Sinh An Toàn Thực Phẩm, Dinh Dưỡng Công Nghiệp',
  description:
    'Cập nhật tin tức thị trường ẩm thực công nghiệp, kiến thức cân đối khẩu phần dinh dưỡng cho công nhân, quy định kiểm định an toàn thực phẩm mới nhất.',
  alternates: {
    canonical: '/tin-tuc',
  },
}

export default async function BlogIndexPage() {
  const dbPosts = await getLatestPosts(12)

  // Nếu trong database CMS có bài viết thì ưu tiên hiển thị bài từ database
  const posts = dbPosts && dbPosts.length > 0
    ? dbPosts.map((post: any) => {
        let imageUrl: string | null = null
        if (post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url) {
          imageUrl = post.featuredImage.url
        }

        let authorName = 'Ban Biên Tập B2B'
        if (post.author && typeof post.author === 'object' && post.author.name) {
          authorName = post.author.name
        }

        const dateStr = post.publishedDate
          ? new Date(post.publishedDate).toLocaleDateString('vi-VN')
          : 'Mới cập nhật'

        const catKey = post.category || 'kien-thuc'
        const categoryLabel = categoryLabels[catKey] || catKey

        return {
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          category: categoryLabel,
          date: dateStr,
          author: authorName,
          readTime: '5 phút đọc',
          imageUrl,
        }
      })
    : samplePosts

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-50/70 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <Breadcrumbs items={[{ label: 'Tin tức & Kiến thức' }]} />
          <div className="max-w-3xl mt-3 sm:mt-4">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-100/80 px-3 py-1 rounded-full">
              Chuyên Mục Chuyên Gia
            </span>
            <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-[1.25]">
              Tin Tức, Kiến Thức Dinh Dưỡng & Pháp Lý Bếp Ăn
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Chia sẻ thông tin hữu ích giúp các nhà quản lý hành chính nhân sự, ban giám đốc nhà máy tối ưu hóa bữa ăn ca cho người lao động.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, idx) => (
            <Card
              key={post.slug || idx}
              className="border-gray-200/90 hover:border-green-600 hover:shadow-lg transition-all flex flex-col justify-between group overflow-hidden"
            >
              <div className="aspect-[16/10] bg-gradient-to-tr from-green-800 to-emerald-950 flex flex-col justify-end p-5 sm:p-6 text-white relative overflow-hidden">
                {post.imageUrl ? (
                  <>
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-800 to-emerald-950" />
                )}

                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-semibold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full text-white shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="text-xs text-green-100 flex items-center gap-3 relative z-10 drop-shadow">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <CardContent className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug mb-2 sm:mb-3">
                    <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4 sm:mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1 text-gray-700 font-medium">
                    <User className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span className="truncate max-w-[140px] sm:max-w-none">{post.author}</span>
                  </span>
                  <Link
                    href={`/tin-tuc/${post.slug}`}
                    className="text-green-700 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform shrink-0"
                  >
                    <span>Đọc tiếp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
