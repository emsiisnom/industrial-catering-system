import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { getLatestPosts } from '@/lib/payload-utils'
import { samplePosts } from '@/data/sample-posts'

const categoryLabels: Record<string, string> = {
  'tin-cong-ty': 'Tin công ty',
  'an-toan-thuc-pham': 'An toàn thực phẩm',
  'dinh-duong': 'Dinh dưỡng',
  'khuyen-mai': 'Khuyến mãi',
  'tuyen-dung': 'Tuyển dụng',
  'kien-thuc': 'Kiến thức',
}

export async function LatestNewsSection() {
  const dbPosts = await getLatestPosts(3)

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
    : samplePosts.slice(0, 3)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50/70 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <span className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-green-100/80 px-3 py-1 rounded-full">
              Tin Tức & Kiến Thức Chuyên Ngành
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Cẩm Nang An Toàn Thực Phẩm & Dinh Dưỡng
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Chia sẻ kiến thức chuẩn ISO, giải pháp nâng cao sức khỏe người lao động và quy định pháp lý bếp ăn nhà máy.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 min-h-[44px]">
              <Link href="/tin-tuc" className="flex items-center gap-2">
                <span>Xem tất cả bài viết</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, idx) => (
            <Card
              key={post.slug || idx}
              className="border-gray-200/90 hover:border-green-600 hover:shadow-lg transition-all flex flex-col justify-between group overflow-hidden bg-white"
            >
              <div className="aspect-[16/10] bg-gradient-to-tr from-green-800 to-emerald-950 flex flex-col justify-end p-5 text-white relative overflow-hidden">
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

              <CardContent className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2 leading-snug mb-2">
                    <Link href={`/tin-tuc/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
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
      </div>
    </section>
  )
}
