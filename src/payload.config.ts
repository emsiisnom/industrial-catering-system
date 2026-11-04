import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { Posts } from './payload/collections/Posts'
import { WeeklyMenus } from './payload/collections/WeeklyMenus'
import { FormSubmissions } from './payload/collections/FormSubmissions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Quản Trị Suất Ăn Công Nghiệp',
      title: 'Quản Trị - Suất Ăn Công Nghiệp',
      description: 'Hệ thống quản trị nội dung website Suất Ăn Công Nghiệp',
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  // Chỉ giữ các danh mục thực sự cần cập nhật thường xuyên:
  // 1. Quản lý Yêu cầu Báo giá & Khách hàng liên hệ (Dành cho Sales/Kinh doanh)
  // 2. Bài viết tin tức & Kiến thức SEO (Dành cho Marketing)
  // 3. Thực đơn tuần mới (Dành cho Vận hành & Khách hàng xem)
  // 4. Thư viện hình ảnh & Người dùng quản trị
  collections: [
    FormSubmissions,
    Posts,
    WeeklyMenus,
    Media,
    Users,
  ],

  globals: [],

  editor: lexicalEditor({}),

  sharp,

  secret: process.env.PAYLOAD_SECRET || 'default-secret-change-me',

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  csrf: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    process.env.NEXT_PUBLIC_SERVER_URL || '',
    process.env.NEXT_PUBLIC_SITE_URL || '',
    ...(process.env.CSRF_URLS ? process.env.CSRF_URLS.split(',').map((url) => url.trim()) : []),
  ].filter(Boolean),
})
