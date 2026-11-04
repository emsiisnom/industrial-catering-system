import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  labels: {
    singular: 'Album ảnh',
    plural: 'Thư viện ảnh',
  },
  admin: {
    useAsTitle: 'title',
    group: 'Nội dung',
    defaultColumns: ['title', 'category', 'order'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'editor',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Tiêu đề album',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Mô tả',
      maxLength: 500,
    },
    {
      name: 'category',
      type: 'select',
      label: 'Danh mục',
      required: true,
      options: [
        { label: 'Nhà bếp', value: 'nha-bep' },
        { label: 'Món ăn', value: 'mon-an' },
        { label: 'Sự kiện', value: 'su-kien' },
        { label: 'Đội ngũ', value: 'doi-ngu' },
        { label: 'Khách hàng', value: 'khach-hang' },
        { label: 'Khác', value: 'khac' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'images',
      type: 'array',
      label: 'Hình ảnh',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          label: 'Hình ảnh',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      label: 'Thứ tự hiển thị',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Số nhỏ hơn hiển thị trước.',
      },
    },
  ],
}
