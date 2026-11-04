import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { WeeklyMenus } from './collections/WeeklyMenus'
import { Certifications } from './collections/Certifications'
import { Testimonials } from './collections/Testimonials'
import { Clients } from './collections/Clients'
import { FormSubmissions } from './collections/FormSubmissions'
import { FAQs } from './collections/FAQs'
import { Gallery } from './collections/Gallery'

import { SiteSettings } from './globals/SiteSettings'
import { CompanyInfo } from './globals/CompanyInfo'

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

  collections: [
    Users,
    Media,
    Posts,
    WeeklyMenus,
    Certifications,
    Testimonials,
    Clients,
    FormSubmissions,
    FAQs,
    Gallery,
  ],

  globals: [SiteSettings, CompanyInfo],

  editor: lexicalEditor(),

  secret: process.env.PAYLOAD_SECRET || 'default-secret-change-me',

  typescript: {
    outputFile: path.resolve(dirname, '..', 'payload-types.ts'),
  },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  csrf: process.env.CSRF_URLS
    ? process.env.CSRF_URLS.split(',').map((url) => url.trim())
    : [],
})
