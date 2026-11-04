import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ArticleJsonLd } from '@/components/seo/JsonLd'
import { CTASection } from '@/components/sections/CTASection'
import { Button } from '@/components/ui/button'
import { samplePosts } from '@/data/sample-posts'
import { Calendar, User, Clock, ArrowLeft, Share2, Tag, CheckCircle2 } from 'lucide-react'
import { getPostBySlug } from '@/lib/payload-utils'
import { RichTextRenderer } from '@/components/ui/RichTextRenderer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const dbPost = await getPostBySlug(slug)
  const post = dbPost
    ? {
        title: dbPost.title,
        excerpt: dbPost.excerpt,
        slug: dbPost.slug,
        author:
          dbPost.author && typeof dbPost.author === 'object' && 'name' in dbPost.author
            ? String(dbPost.author.name)
            : 'Ban Biên Tập B2B',
      }
    : samplePosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Không tìm thấy bài viết',
    }
  }

  // Lấy hình ảnh OG từ tab SEO (nếu có) hoặc dùng hình ảnh đại diện của bài viết
  let ogImageUrl: string | null = null
  if (dbPost?.seo?.ogImage && typeof dbPost.seo.ogImage === 'object' && 'url' in dbPost.seo.ogImage && dbPost.seo.ogImage.url) {
    ogImageUrl = String(dbPost.seo.ogImage.url)
  } else if (dbPost?.featuredImage && typeof dbPost.featuredImage === 'object' && 'url' in dbPost.featuredImage && dbPost.featuredImage.url) {
    ogImageUrl = String(dbPost.featuredImage.url)
  }

  const pageTitle = dbPost?.seo?.metaTitle || post.title
  const pageDescription = dbPost?.seo?.metaDescription || post.excerpt

  return {
    title: `${pageTitle} | Suất Ăn Công Nghiệp`,
    description: pageDescription,
    alternates: {
      canonical: `/tin-tuc/${post.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'article',
      publishedTime: dbPost?.publishedDate || '2024-10-15T08:00:00.000Z',
      authors: [post.author],
      ...(ogImageUrl ? { images: [{ url: ogImageUrl }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      ...(ogImageUrl ? { images: [ogImageUrl] } : {}),
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const dbPost = await getPostBySlug(slug)
  const isDb = !!dbPost

  let featuredImageUrl: string | null = null
  if (dbPost?.featuredImage && typeof dbPost.featuredImage === 'object' && 'url' in dbPost.featuredImage && dbPost.featuredImage.url) {
    featuredImageUrl = String(dbPost.featuredImage.url)
  }

  const post = dbPost
    ? {
        title: dbPost.title,
        excerpt: dbPost.excerpt,
        slug: dbPost.slug,
        category: typeof dbPost.category === 'string' ? dbPost.category : 'Tin tức',
        author:
          dbPost.author && typeof dbPost.author === 'object' && 'name' in dbPost.author
            ? String(dbPost.author.name)
            : 'Ban Biên Tập B2B',
        date: dbPost.publishedDate
          ? new Date(dbPost.publishedDate).toLocaleDateString('vi-VN')
          : 'Mới cập nhật',
        readTime: '5 phút đọc',
        content: dbPost.content,
        imageUrl: featuredImageUrl,
      }
    : { ...samplePosts.find((p) => p.slug === slug), imageUrl: null }

  if (!post) {
    notFound()
  }

  return (
    <article className="bg-white">
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://suatancn.com'}/tin-tuc/${post.slug}`}
        datePublished="2024-10-15T08:00:00.000Z"
        authorName={post.author}
      />

      {/* Header */}
      <div className="bg-gradient-to-b from-green-50/70 to-white border-b border-gray-100 py-10 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Tin tức', href: '/tin-tuc' },
              { label: post.title },
            ]}
          />

          <div className="mt-4 sm:mt-6">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="mt-3 sm:mt-4 text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500 pt-3 sm:pt-4 border-t border-gray-200">
              <span className="flex items-center gap-1.5 font-medium text-gray-800">
                <User className="w-4 h-4 text-green-600" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {post.imageUrl && (
          <div className="mb-8 sm:mb-10 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50/70 flex items-center justify-center text-center">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-auto h-auto max-h-[580px] max-w-full object-contain mx-auto rounded-2xl block"
            />
          </div>
        )}

        <div className="p-5 sm:p-6 bg-green-50/60 border-l-4 border-green-600 rounded-r-xl mb-8 sm:mb-10 text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
          {post.excerpt}
        </div>

        {isDb && (post as any).content ? (
          <RichTextRenderer content={(post as any).content} />
        ) : (
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5 sm:space-y-6 leading-relaxed text-sm sm:text-base">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
              1. Tầm quan trọng của quy chuẩn trong bếp ăn công nghiệp
            </h2>
            <p>
              Đối với các nhà máy sản xuất có quy mô từ vài trăm đến hàng chục nghìn công nhân, việc vận hành bếp ăn tập thể đòi hỏi sự đồng bộ và kỷ luật nghiêm ngặt tương tự như một dây chuyền sản xuất cơ khí chính xác. Bất kỳ sai sót nào trong chuỗi cung ứng thực phẩm cũng có thể dẫn đến hậu quả nghiêm trọng, làm ngưng trệ hoạt động sản xuất của toàn bộ nhà máy.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
              2. Các nguyên tắc cốt lõi cần tuân thủ
            </h2>
            <ul className="space-y-3 pl-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Kiểm soát nhiệt độ thức ăn:</strong> Luôn duy trì trên 65°C đối với thức ăn nóng từ khi ra lò đến khay của công nhân.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Quy trình một chiều tuyệt đối:</strong> Khu vực thực phẩm sống và thực phẩm chín phải tách biệt hoàn toàn về mặt không gian và dụng cụ.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Lưu mẫu thức ăn 24 giờ:</strong> Mỗi món ăn phải lưu trữ tối thiểu 100g - 150g trong hũ thủy tinh tiệt trùng có niêm phong của cơ quan y tế.</span>
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">
              3. Khuyến nghị cho ban quản lý doanh nghiệp
            </h2>
            <p>
              Doanh nghiệp khi thẩm định các nhà thầu cung cấp suất ăn nên tổ chức các chuyến kiểm tra đột xuất tại bếp trung tâm của nhà thầu vào khung giờ cao điểm (4h00 - 6h00 sáng). Đây là thời điểm rõ ràng nhất phản ánh năng lực quản lý nguồn hàng và vệ sinh thực tế.
            </p>
          </div>
        )}

        {/* Back Link & Tags */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Button asChild variant="outline" className="w-full sm:w-auto border-gray-300 min-h-[44px]">
            <Link href="/tin-tuc" className="flex items-center justify-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại danh sách bài viết</span>
            </Link>
          </Button>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Tag className="w-4 h-4 text-green-600 shrink-0" />
            <span>Chủ đề: Suất ăn công nghiệp, VSATTP, Bếp ăn một chiều</span>
          </div>
        </div>
      </div>

      <CTASection />
    </article>
  )
}
