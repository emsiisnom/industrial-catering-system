import type { GlobalConfig } from 'payload'

export const CompanyInfo: GlobalConfig = {
  slug: 'company-info',
  label: 'Thông tin công ty',
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
              name: 'companyName',
              type: 'text',
              label: 'Tên công ty đầy đủ',
              required: true,
              admin: {
                description: 'Tên pháp lý đầy đủ theo giấy phép kinh doanh.',
              },
            },
            {
              name: 'taxCode',
              type: 'text',
              label: 'Mã số thuế',
              required: true,
            },
            {
              name: 'foundedYear',
              type: 'number',
              label: 'Năm thành lập',
              required: true,
              min: 1900,
              max: 2100,
            },
          ],
        },
        {
          label: 'Tầm nhìn & Sứ mệnh',
          fields: [
            {
              name: 'mission',
              type: 'richText',
              label: 'Sứ mệnh',
              required: true,
            },
            {
              name: 'vision',
              type: 'richText',
              label: 'Tầm nhìn',
              required: true,
            },
            {
              name: 'values',
              type: 'richText',
              label: 'Giá trị cốt lõi',
              required: true,
            },
          ],
        },
        {
          label: 'Thống kê',
          fields: [
            {
              name: 'stats',
              type: 'group',
              label: 'Số liệu nổi bật',
              fields: [
                {
                  name: 'totalMeals',
                  type: 'number',
                  label: 'Tổng suất ăn/ngày',
                  required: true,
                  min: 0,
                  admin: {
                    description: 'Tổng số suất ăn cung cấp mỗi ngày.',
                  },
                },
                {
                  name: 'totalClients',
                  type: 'number',
                  label: 'Tổng khách hàng',
                  required: true,
                  min: 0,
                },
                {
                  name: 'totalYears',
                  type: 'number',
                  label: 'Số năm hoạt động',
                  required: true,
                  min: 0,
                },
                {
                  name: 'totalEmployees',
                  type: 'number',
                  label: 'Số nhân viên',
                  required: true,
                  min: 0,
                },
              ],
            },
          ],
        },
        {
          label: 'Giấy phép',
          fields: [
            {
              name: 'licensesSummary',
              type: 'richText',
              label: 'Tóm tắt giấy phép & chứng nhận',
              admin: {
                description:
                  'Mô tả tổng quan các giấy phép, chứng nhận mà công ty đạt được.',
              },
            },
          ],
        },
      ],
    },
  ],
}
