import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Cài đặt website',
  admin: {
    group: 'Cài đặt',
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Thông tin chung',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              label: 'Tên website',
              required: true,
              defaultValue: 'Suất Ăn Công Nghiệp',
            },
            {
              name: 'siteDescription',
              type: 'textarea',
              label: 'Mô tả website',
              required: true,
              defaultValue:
                'Cung cấp suất ăn công nghiệp chất lượng cao cho doanh nghiệp, nhà máy, khu công nghiệp.',
            },
            {
              name: 'logo',
              type: 'upload',
              label: 'Logo',
              relationTo: 'media',
            },
            {
              name: 'favicon',
              type: 'upload',
              label: 'Favicon',
              relationTo: 'media',
            },
          ],
        },
        {
          label: 'Mạng xã hội',
          fields: [
            {
              name: 'facebook',
              type: 'text',
              label: 'Facebook URL',
              admin: {
                description: 'VD: https://facebook.com/suatancn',
              },
            },
            {
              name: 'zalo',
              type: 'text',
              label: 'Zalo',
              admin: {
                description: 'Số điện thoại Zalo hoặc link Zalo OA.',
              },
            },
            {
              name: 'youtube',
              type: 'text',
              label: 'YouTube URL',
            },
          ],
        },
        {
          label: 'Liên hệ',
          fields: [
            {
              name: 'phone',
              type: 'text',
              label: 'Số điện thoại',
              required: true,
            },
            {
              name: 'phoneSecondary',
              type: 'text',
              label: 'Số điện thoại phụ',
            },
            {
              name: 'email',
              type: 'email',
              label: 'Email',
              required: true,
            },
            {
              name: 'address',
              type: 'textarea',
              label: 'Địa chỉ',
              required: true,
            },
            {
              name: 'googleMapsEmbed',
              type: 'textarea',
              label: 'Google Maps Embed URL',
              admin: {
                description: 'URL nhúng Google Maps (src của iframe).',
              },
            },
          ],
        },
        {
          label: 'Giờ làm việc',
          fields: [
            {
              name: 'workingHours',
              type: 'array',
              label: 'Giờ làm việc',
              fields: [
                {
                  name: 'days',
                  type: 'text',
                  label: 'Ngày',
                  required: true,
                  admin: {
                    description: 'VD: Thứ 2 - Thứ 6, Thứ 7, Chủ nhật',
                  },
                },
                {
                  name: 'hours',
                  type: 'text',
                  label: 'Giờ',
                  required: true,
                  admin: {
                    description: 'VD: 7:00 - 17:00, Nghỉ',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Footer',
          fields: [
            {
              name: 'footerText',
              type: 'textarea',
              label: 'Nội dung footer',
              defaultValue:
                '© 2024 Suất Ăn Công Nghiệp. Tất cả quyền được bảo lưu.',
            },
          ],
        },
      ],
    },
  ],
}
