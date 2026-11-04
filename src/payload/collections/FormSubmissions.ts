import type { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  labels: {
    singular: 'Yêu cầu',
    plural: 'Yêu cầu từ khách hàng',
  },
  admin: {
    useAsTitle: 'contactPerson',
    group: 'Kinh doanh',
    defaultColumns: ['type', 'contactPerson', 'companyName', 'phone', 'status', 'createdAt'],
    hidden: ({ user }) => user?.role !== 'admin',
  },
  access: {
    read: ({ req: { user } }) => Boolean(user?.role === 'admin'),
    create: () => true,
    update: ({ req: { user } }) => Boolean(user?.role === 'admin'),
    delete: ({ req: { user } }) => Boolean(user?.role === 'admin'),
  },
  fields: [
    // --- SIDEBAR FIELDS ---
    {
      name: 'type',
      type: 'select',
      label: 'Loại yêu cầu',
      required: true,
      defaultValue: 'contact',
      options: [
        { label: 'Báo giá suất ăn', value: 'quote' },
        { label: 'Liên hệ tư vấn', value: 'contact' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Trạng thái xử lý',
      required: true,
      defaultValue: 'new',
      options: [
        { label: '🔴 Mới tiếp nhận', value: 'new' },
        { label: '🟡 Đang xử lý / Khảo sát', value: 'processing' },
        { label: '🟢 Đã liên hệ & Báo giá', value: 'contacted' },
        { label: '⚪ Đã đóng / Ký hợp đồng', value: 'closed' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'assignedTo',
      type: 'relationship',
      label: 'Nhân viên phụ trách',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },

    // --- THÔNG TIN LIÊN HỆ CỦA KHÁCH HÀNG ---
    {
      type: 'row',
      fields: [
        {
          name: 'contactPerson',
          type: 'text',
          label: 'Họ tên người liên hệ',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'companyName',
          type: 'text',
          label: 'Tên công ty / Doanh nghiệp',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Số điện thoại',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email liên hệ',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'address',
      type: 'text',
      label: 'Địa chỉ nhà máy / Điểm giao suất ăn',
      admin: {
        placeholder: 'Khu công nghiệp, Phường/Xã, Quận/Huyện...',
      },
    },

    // --- NỘI DUNG LIÊN HỆ TƯ VẤN ---
    {
      name: 'subject',
      type: 'text',
      label: 'Tiêu đề tin nhắn / Nhu cầu',
      admin: {
        placeholder: 'VD: Cần tư vấn suất ăn cho công nghiệp...',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Nội dung tin nhắn chi tiết',
      admin: {
        rows: 4,
        placeholder: 'Nội dung khách hàng gửi qua form liên hệ...',
      },
    },

    // --- CHI TIẾT YÊU CẦU BÁO GIÁ (NẾU CÓ) ---
    {
      type: 'row',
      fields: [
        {
          name: 'mealCount',
          type: 'number',
          label: 'Số lượng suất ăn (suất/ngày)',
          admin: {
            width: '33%',
          },
        },
        {
          name: 'mealType',
          type: 'select',
          label: 'Ca / Hình thức phục vụ',
          options: [
            { label: 'Bữa trưa', value: 'bua-trua' },
            { label: 'Bữa sáng', value: 'bua-sang' },
            { label: 'Bữa tối', value: 'bua-toi' },
            { label: 'Bữa đêm (ca đêm)', value: 'bua-dem' },
            { label: 'Trọn gói (nhiều ca)', value: 'tron-goi' },
          ],
          admin: {
            width: '33%',
          },
        },
        {
          name: 'startDate',
          type: 'text',
          label: 'Ngày bắt đầu dự kiến',
          admin: {
            width: '33%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'duration',
          type: 'text',
          label: 'Thời hạn hợp đồng dự kiến',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'requirements',
          type: 'textarea',
          label: 'Yêu cầu đặc biệt về khẩu phần / Vận hành',
          admin: {
            width: '50%',
            rows: 3,
          },
        },
      ],
    },

    // --- GHI CHÚ NỘI BỘ DÀNH CHO SALES ---
    {
      name: 'notes',
      type: 'textarea',
      label: 'Ghi chú nội bộ (Kinh doanh ghi chép)',
      admin: {
        rows: 3,
        description: 'Ghi lại lịch sử gọi điện, nhu cầu chi tiết sau khi trao đổi với khách...',
      },
    },

    // --- FIELD DATA JSON CŨ (ẨN KHỎI GIAO DIỆN ADMIN ĐỂ TRÁNH RỐI MẮT) ---
    {
      name: 'data',
      type: 'json',
      label: 'Dữ liệu thô (JSON)',
      admin: {
        hidden: true,
      },
    },
  ],
  timestamps: true,
}
