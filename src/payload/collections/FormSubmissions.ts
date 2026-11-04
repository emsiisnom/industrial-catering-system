import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  labels: {
    singular: 'Yêu cầu',
    plural: 'Yêu cầu từ khách hàng',
  },
  admin: {
    useAsTitle: 'companyName',
    group: 'Kinh doanh',
    defaultColumns: ['type', 'companyName', 'contactPerson', 'email', 'status', 'createdAt'],
    hidden: ({ user }) => user?.role !== 'admin',
  },
  access: {
    read: ({ req: { user } }) => Boolean(user?.role === 'admin'),
    create: () => true,
    update: ({ req: { user } }) => Boolean(user?.role === 'admin'),
    delete: ({ req: { user } }) => Boolean(user?.role === 'admin'),
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      label: 'Loại yêu cầu',
      required: true,
      options: [
        { label: 'Báo giá', value: 'quote' },
        { label: 'Liên hệ', value: 'contact' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Trạng thái',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'Mới', value: 'new' },
        { label: 'Đang xử lý', value: 'processing' },
        { label: 'Đã liên hệ', value: 'contacted' },
        { label: 'Đã đóng', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'assignedTo',
      type: 'relationship',
      label: 'Người phụ trách',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'companyName',
      type: 'text',
      label: 'Tên công ty',
    },
    {
      name: 'contactPerson',
      type: 'text',
      label: 'Người liên hệ',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Số điện thoại',
    },
    {
      name: 'data',
      type: 'json',
      label: 'Dữ liệu đầy đủ',
      admin: {
        description: 'Toàn bộ dữ liệu form được lưu dưới dạng JSON.',
      },
    },
    {
      name: 'notes',
      type: 'richText',
      label: 'Ghi chú nội bộ',
      admin: {
        description: 'Ghi chú nội bộ cho đội ngũ kinh doanh.',
      },
    },
  ],
  timestamps: true,
}
