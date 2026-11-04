import type { CollectionConfig } from 'payload'

function createDayTab(name: string, label: string, defaultCalories: string = '750 - 820 kcal') {
  return {
    name,
    label,
    fields: [
      {
        type: 'row' as const,
        fields: [
          {
            name: 'mainDish',
            type: 'text' as const,
            label: 'Món chính (2 món chọn 1)',
            admin: {
              width: '70%',
              placeholder: 'VD: Thịt kho tàu trứng cút / Cá diêu hồng chiên xù xốt chua ngọt',
            },
          },
          {
            name: 'calories',
            type: 'text' as const,
            label: 'Định lượng Calo',
            defaultValue: defaultCalories,
            admin: {
              width: '30%',
              placeholder: 'VD: 750 - 820 kcal',
            },
          },
        ],
      },
      {
        type: 'row' as const,
        fields: [
          {
            name: 'sideDish',
            type: 'text' as const,
            label: 'Món phụ / Rau xào',
            admin: {
              width: '50%',
              placeholder: 'VD: Đậu cove xào thịt nạc băm',
            },
          },
          {
            name: 'soup',
            type: 'text' as const,
            label: 'Món canh',
            admin: {
              width: '50%',
              placeholder: 'VD: Canh bí xanh nấu tôm khô hành hoa',
            },
          },
        ],
      },
      {
        type: 'row' as const,
        fields: [
          {
            name: 'dessert',
            type: 'text' as const,
            label: 'Món tráng miệng',
            admin: {
              width: '50%',
              placeholder: 'VD: Chuối già Nam Mỹ / Dưa hấu',
            },
          },
          {
            name: 'image',
            type: 'upload' as const,
            label: 'Hình ảnh khay cơm thật hôm nay (tùy chọn)',
            relationTo: 'media',
            admin: {
              width: '50%',
              description: 'Tải ảnh khay cơm inox thực tế để khách hàng thấy món ăn trực quan.',
            },
          },
        ],
      },
      {
        name: 'note',
        type: 'text' as const,
        label: 'Ghi chú ngày này (tùy chọn)',
        admin: {
          placeholder: 'VD: Có phục vụ thêm đồ ăn chay theo đăng ký trước của phòng HCNS',
        },
      },
    ],
  }
}

export const WeeklyMenus: CollectionConfig = {
  slug: 'weekly-menus',
  labels: {
    singular: 'Thực đơn tuần',
    plural: 'Thực đơn tuần',
  },
  admin: {
    useAsTitle: 'weekTitle',
    group: 'Nội dung',
    defaultColumns: ['weekTitle', 'priceRange', 'startDate', 'endDate', 'status'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user && (user.role === 'admin' || user.role === 'editor')),
    update: ({ req: { user } }) => Boolean(user && (user.role === 'admin' || user.role === 'editor')),
    delete: ({ req: { user } }) => Boolean(user && user.role === 'admin'),
  },
  fields: [
    {
      name: 'weekTitle',
      type: 'text',
      label: 'Tiêu đề tuần',
      required: true,
      defaultValue: 'Thực đơn tiêu chuẩn tuần này',
      admin: {
        description: 'VD: Tuần 1 - Tháng 11/2026 hoặc Thực Đơn Chuyên Gia & Văn Phòng',
      },
    },
    {
      name: 'priceRange',
      type: 'text',
      label: 'Đơn giá định mức tham khảo',
      defaultValue: '30.000đ - 35.000đ/suất',
      admin: {
        position: 'sidebar',
        description: 'VD: 30.000đ - 35.000đ/suất hoặc 50.000đ - 65.000đ/suất',
      },
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'Ngày bắt đầu áp dụng',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'Ngày kết thúc',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'status',
      type: 'select',
      label: 'Trạng thái',
      required: true,
      defaultValue: 'active',
      options: [
        { label: 'Đang áp dụng', value: 'active' },
        { label: 'Lưu trữ', value: 'archived' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        createDayTab('monday', 'Thứ 2', '750 - 820 kcal'),
        createDayTab('tuesday', 'Thứ 3', '780 - 840 kcal'),
        createDayTab('wednesday', 'Thứ 4', '760 - 830 kcal'),
        createDayTab('thursday', 'Thứ 5', '790 - 850 kcal'),
        createDayTab('friday', 'Thứ 6', '800 - 860 kcal'),
        createDayTab('saturday', 'Thứ 7 (Tăng ca)', '740 - 810 kcal'),
        createDayTab('sunday', 'Chủ nhật (Tùy chọn)', '740 - 800 kcal'),
      ],
    },
    {
      name: 'generalNotes',
      type: 'textarea',
      label: 'Ghi chú chung toàn tuần',
      admin: {
        description: 'Ghi chú hiển thị bên dưới bảng thực đơn (VD: Cam kết nguồn thịt tươi CP, rau VietGAP...).',
      },
    },
  ],
}
