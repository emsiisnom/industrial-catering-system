import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  labels: {
    singular: 'Câu hỏi thường gặp',
    plural: 'Câu hỏi thường gặp',
  },
  admin: {
    useAsTitle: 'question',
    group: 'Nội dung',
    defaultColumns: ['question', 'category', 'order', 'isActive'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      label: 'Câu hỏi',
      required: true,
      maxLength: 300,
    },
    {
      name: 'answer',
      type: 'richText',
      label: 'Câu trả lời',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Danh mục',
      required: true,
      options: [
        { label: 'Dịch vụ', value: 'dich-vu' },
        { label: 'Giá cả', value: 'gia-ca' },
        { label: 'Chất lượng', value: 'chat-luong' },
        { label: 'Hợp đồng', value: 'hop-dong' },
        { label: 'Vận hành', value: 'van-hanh' },
        { label: 'Khác', value: 'khac' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Thứ tự hiển thị',
      required: true,
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Số nhỏ hơn hiển thị trước.',
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
