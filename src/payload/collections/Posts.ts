import type { CollectionConfig } from 'payload'

function toSlug(text: string): string {
  const vietnameseMap: Record<string, string> = {
    à: 'a', á: 'a', ả: 'a', ã: 'a', ạ: 'a',
    ă: 'a', ằ: 'a', ắ: 'a', ẳ: 'a', ẵ: 'a', ặ: 'a',
    â: 'a', ầ: 'a', ấ: 'a', ẩ: 'a', ẫ: 'a', ậ: 'a',
    đ: 'd',
    è: 'e', é: 'e', ẻ: 'e', ẽ: 'e', ẹ: 'e',
    ê: 'e', ề: 'e', ế: 'e', ể: 'e', ễ: 'e', ệ: 'e',
    ì: 'i', í: 'i', ỉ: 'i', ĩ: 'i', ị: 'i',
    ò: 'o', ó: 'o', ỏ: 'o', õ: 'o', ọ: 'o',
    ô: 'o', ồ: 'o', ố: 'o', ổ: 'o', ỗ: 'o', ộ: 'o',
    ơ: 'o', ờ: 'o', ớ: 'o', ở: 'o', ỡ: 'o', ợ: 'o',
    ù: 'u', ú: 'u', ủ: 'u', ũ: 'u', ụ: 'u',
    ư: 'u', ừ: 'u', ứ: 'u', ử: 'u', ữ: 'u', ự: 'u',
    ỳ: 'y', ý: 'y', ỷ: 'y', ỹ: 'y', ỵ: 'y',
  }

  return text
    .toLowerCase()
    .split('')
    .map((char) => vietnameseMap[char] || char)
    .join('')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Bài viết',
    plural: 'Tin tức & Bài viết',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Nội dung',
    defaultColumns: ['title', 'category', 'status', 'publishedDate'],
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return { status: { equals: 'published' } }
    },
    create: ({ req: { user } }) => Boolean(user && (user.role === 'admin' || user.role === 'editor')),
    update: ({ req: { user } }) => Boolean(user && (user.role === 'admin' || user.role === 'editor')),
    delete: ({ req: { user } }) => Boolean(user && user.role === 'admin'),
  },
  hooks: {
    beforeChange: [
      ({ data, req, operation }) => {
        if (operation === 'create' && data?.title && !data?.slug) {
          data.slug = toSlug(data.title)
        }
        if (operation === 'create' && req?.user && !data?.author) {
          data.author = req.user.id
        }
        if (data?.status === 'published' && !data?.publishedDate) {
          data.publishedDate = new Date().toISOString()
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Tiêu đề',
      required: true,
      maxLength: 200,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Đường dẫn (Slug)',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Tự động tạo từ tiêu đề nếu để trống.',
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return toSlug(data.title)
            }
            return value
          },
        ],
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Tóm tắt',
      required: true,
      maxLength: 500,
      admin: {
        description: 'Mô tả ngắn gọn bài viết, hiển thị trong danh sách tin tức.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Nội dung',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      label: 'Hình ảnh đại diện',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Danh mục',
      required: true,
      options: [
        { label: 'Tin công ty', value: 'tin-cong-ty' },
        { label: 'An toàn thực phẩm', value: 'an-toan-thuc-pham' },
        { label: 'Dinh dưỡng', value: 'dinh-duong' },
        { label: 'Khuyến mãi', value: 'khuyen-mai' },
        { label: 'Tuyển dụng', value: 'tuyen-dung' },
        { label: 'Kiến thức', value: 'kien-thuc' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tags',
      type: 'json',
      label: 'Thẻ (Tags)',
      admin: {
        position: 'sidebar',
        description: 'Nhập mảng các thẻ, VD: ["suất ăn", "vệ sinh"]',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      label: 'Tác giả',
      relationTo: 'users',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Trạng thái',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Bản nháp', value: 'draft' },
        { label: 'Đã xuất bản', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Ngày xuất bản',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ value, data }) => {
            if (data?.status === 'published' && !value) {
              return new Date().toISOString()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      admin: {
        description: 'Tùy chỉnh thông tin SEO cho bài viết này.',
      },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          maxLength: 70,
          admin: {
            description: 'Để trống sẽ sử dụng tiêu đề bài viết. Tối đa 70 ký tự.',
          },
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          maxLength: 160,
          admin: {
            description: 'Để trống sẽ sử dụng tóm tắt bài viết. Tối đa 160 ký tự.',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          label: 'Hình ảnh OG (Social Share)',
          relationTo: 'media',
          admin: {
            description: 'Để trống sẽ sử dụng hình ảnh đại diện.',
          },
        },
      ],
    },
  ],
}
