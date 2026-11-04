import { getPayload as getPayloadClient, type Where } from 'payload'
import config from '@payload-config'

export async function getPayload() {
  return getPayloadClient({ config })
}

/**
 * Lấy danh sách bài viết tin tức mới nhất (chuẩn SEO)
 */
export async function getLatestPosts(limit: number = 6) {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'posts',
      where: {
        status: { equals: 'published' },
      },
      sort: '-publishedDate',
      limit,
      depth: 1,
    })
    return result.docs
  } catch (error) {
    console.error('Lỗi khi lấy danh sách bài viết từ CMS:', error)
    return []
  }
}

/**
 * Lấy chi tiết bài viết theo Slug
 */
export async function getPostBySlug(slug: string) {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'posts',
      where: {
        slug: { equals: slug },
        status: { equals: 'published' },
      },
      limit: 1,
      depth: 2,
    })
    return result.docs[0] || null
  } catch (error) {
    console.error('Lỗi khi lấy chi tiết bài viết:', error)
    return null
  }
}

/**
 * Lấy thực đơn tuần hiện tại (đang áp dụng)
 */
export async function getCurrentWeeklyMenu() {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'weekly-menus',
      where: {
        status: { equals: 'active' },
      },
      sort: '-startDate',
      limit: 1,
      depth: 2,
    })
    return result.docs[0] || null
  } catch (error) {
    console.error('Lỗi khi lấy thực đơn tuần từ CMS:', error)
    return null
  }
}

/**
 * Lấy tất cả các thực đơn tuần đang áp dụng (hỗ trợ nhiều phân khúc giá: 30k-35k, 50k-65k...)
 */
export async function getActiveWeeklyMenus() {
  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'weekly-menus',
      where: {
        status: { equals: 'active' },
      },
      sort: 'id',
      limit: 10,
      depth: 2,
    })
    return result.docs
  } catch (error) {
    console.error('Lỗi khi lấy danh sách thực đơn tuần từ CMS:', error)
    return []
  }
}

/**
 * Tạo mới yêu cầu báo giá hoặc liên hệ vào CMS
 */
export async function saveFormSubmission(data: {
  type: 'quote' | 'contact'
  companyName?: string
  contactPerson?: string
  email?: string
  phone?: string
  address?: string
  subject?: string
  message?: string
  mealCount?: number
  mealType?: string
  startDate?: string
  duration?: string
  requirements?: string
  data: Record<string, unknown>
}) {
  try {
    const payload = await getPayload()
    return await payload.create({
      collection: 'form-submissions',
      data: {
        type: data.type,
        status: 'new',
        companyName: data.companyName,
        contactPerson: data.contactPerson,
        email: data.email,
        phone: data.phone,
        address: data.address,
        subject: data.subject,
        message: data.message,
        mealCount: data.mealCount,
        mealType: data.mealType,
        startDate: data.startDate,
        duration: data.duration,
        requirements: data.requirements,
        data: data.data,
      },
    })
  } catch (error) {
    console.error('Lỗi khi lưu form submission vào CMS:', error)
    return null
  }
}
