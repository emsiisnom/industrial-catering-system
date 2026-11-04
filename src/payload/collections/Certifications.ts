import type { CollectionConfig } from 'payload'

export const Certifications: CollectionConfig = {
  slug: 'certifications',
  labels: {
    singular: 'Chứng nhận',
    plural: 'Chứng nhận & Giấy phép',
  },
  admin: {
    useAsTitle: 'name',
    group: 'Nội dung',
    defaultColumns: ['name', 'issueDate', 'isActive'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Tên chứng nhận',
      required: true,
      admin: {
        description: 'VD: ISO 22000:2018, HACCP, Giấy phép ATTP',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Mô tả',
      required: true,
      maxLength: 500,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Hình ảnh chứng nhận',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'issueDate',
      type: 'date',
      label: 'Ngày cấp',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Đang hiệu lực',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
