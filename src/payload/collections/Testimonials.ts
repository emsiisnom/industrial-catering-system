import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Đánh giá',
    plural: 'Đánh giá khách hàng',
  },
  admin: {
    useAsTitle: 'clientName',
    group: 'Nội dung',
    defaultColumns: ['clientName', 'company', 'rating', 'isActive'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      label: 'Tên khách hàng',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      label: 'Công ty',
      required: true,
    },
    {
      name: 'position',
      type: 'text',
      label: 'Chức vụ',
      required: true,
      admin: {
        description: 'VD: Giám đốc nhân sự, Trưởng phòng hành chính',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'Nội dung đánh giá',
      required: true,
      maxLength: 1000,
    },
    {
      name: 'avatar',
      type: 'upload',
      label: 'Ảnh đại diện',
      relationTo: 'media',
    },
    {
      name: 'rating',
      type: 'number',
      label: 'Đánh giá (1-5 sao)',
      required: true,
      min: 1,
      max: 5,
      defaultValue: 5,
      admin: {
        position: 'sidebar',
        step: 1,
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Hiển thị',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
