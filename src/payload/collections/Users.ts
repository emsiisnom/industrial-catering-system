import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Người dùng',
    plural: 'Người dùng',
  },
  auth: true,
  admin: {
    useAsTitle: 'name',
    group: 'Hệ thống',
    defaultColumns: ['name', 'email', 'role'],
    hidden: ({ user }) => user?.role !== 'admin',
  },
  access: {
    admin: ({ req: { user } }) => Boolean(user && (user.role === 'admin' || user.role === 'editor')),
    read: ({ req: { user } }) => Boolean(user),
    create: ({ req: { user } }) => Boolean(user?.role === 'admin'),
    update: ({ req: { user }, id }) => {
      if (!user) return false
      if (user.role === 'admin') return true
      return user.id === id
    },
    delete: ({ req: { user } }) => Boolean(user?.role === 'admin'),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Họ tên',
      defaultValue: 'Người dùng',
    },
    {
      name: 'role',
      type: 'select',
      label: 'Vai trò',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Quản trị viên (Toàn quyền)', value: 'admin' },
        { label: 'Biên tập viên (Nội dung & Thực đơn)', value: 'editor' },
      ],
      access: {
        update: ({ req: { user } }) => Boolean(user?.role === 'admin'),
      },
    },
  ],
}
