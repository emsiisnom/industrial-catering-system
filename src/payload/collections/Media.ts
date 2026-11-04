import path from 'path'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Hình ảnh',
    plural: 'Thư viện hình ảnh',
  },
  admin: {
    group: 'Nội dung',
    defaultColumns: ['filename', 'alt', 'updatedAt'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user && (user.role === 'admin' || user.role === 'editor')),
    update: ({ req: { user } }) => Boolean(user && (user.role === 'admin' || user.role === 'editor')),
    delete: ({ req: { user } }) => Boolean(user && user.role === 'admin'),
  },
  upload: {
    staticDir: path.resolve(process.cwd(), 'media'),
    mimeTypes: ['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml', 'image/gif'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 512,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Mô tả hình ảnh (Alt text)',
      required: true,
      admin: {
        description: 'Mô tả ngắn gọn nội dung hình ảnh, quan trọng cho SEO và khả năng truy cập.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Chú thích',
      admin: {
        description: 'Chú thích hiển thị bên dưới hình ảnh (tùy chọn).',
      },
    },
  ],
}
