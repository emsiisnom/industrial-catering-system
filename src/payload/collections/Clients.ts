import type { CollectionConfig } from 'payload'

export const Clients: CollectionConfig = {
  slug: 'clients',
  labels: {
    singular: 'Khách hàng',
    plural: 'Khách hàng tiêu biểu',
  },
  admin: {
    useAsTitle: 'companyName',
    group: 'Nội dung',
    defaultColumns: ['companyName', 'industry', 'mealCount', 'isFeatured'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      label: 'Tên công ty',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      label: 'Logo công ty',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'industry',
      type: 'select',
      label: 'Ngành nghề',
      required: true,
      options: [
        { label: 'Sản xuất', value: 'san-xuat' },
        { label: 'Điện tử', value: 'dien-tu' },
        { label: 'Dệt may', value: 'det-may' },
        { label: 'Chế biến', value: 'che-bien' },
        { label: 'Xây dựng', value: 'xay-dung' },
        { label: 'Logistics', value: 'logistics' },
        { label: 'Giáo dục', value: 'giao-duc' },
        { label: 'Y tế', value: 'y-te' },
        { label: 'Khác', value: 'khac' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Mô tả',
      maxLength: 500,
      admin: {
        description: 'Mô tả ngắn gọn về hợp tác với khách hàng.',
      },
    },
    {
      name: 'mealCount',
      type: 'number',
      label: 'Số suất/ngày',
      min: 0,
      admin: {
        description: 'Số lượng suất ăn cung cấp mỗi ngày.',
      },
    },
    {
      name: 'startYear',
      type: 'number',
      label: 'Năm bắt đầu hợp tác',
      min: 2000,
      max: 2100,
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Khách hàng tiêu biểu',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Hiển thị trên trang chủ.',
      },
    },
  ],
}
