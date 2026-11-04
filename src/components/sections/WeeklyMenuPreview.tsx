import { getActiveWeeklyMenus } from "@/lib/payload-utils"
import { WeeklyMenuPreviewClient, type PreviewMenuOption } from "@/components/menu/WeeklyMenuPreviewClient"

const defaultMenus = [
  {
    day: "Thứ 2",
    imageUrl: null,
    meals: [
      { name: "Cơm sườn nướng mật ong", type: "Món chính", description: "Sườn nướng than hoa, rau xào thập cẩm, canh chua" },
      { name: "Cơm gà chiên giòn", type: "Món chính", description: "Gà chiên giòn rụm, đậu que xào, canh bí đỏ thịt bằm" },
    ],
  },
  {
    day: "Thứ 3",
    imageUrl: null,
    meals: [
      { name: "Cơm cá basa kho tộ", type: "Món chính", description: "Cá basa kho tộ đậm đà, bầu xào trứng, canh rau ngót" },
      { name: "Cơm bò xào lúc lắc", type: "Món chính", description: "Bò lúc lắc mềm ngọt, salad trộn giấm, canh khổ qua nhồi thịt" },
    ],
  },
  {
    day: "Thứ 4",
    imageUrl: null,
    meals: [
      { name: "Cơm thịt kho trứng cút", type: "Món chính", description: "Thịt kho tàu nước dừa, rau muống xào tỏi, canh mồng tơi cua" },
      { name: "Cơm tôm sú rim mặn ngọt", type: "Món chính", description: "Tôm sú rim tiêu ngọt thịt, su su xào, canh cải thìa nấm" },
    ],
  },
  {
    day: "Thứ 5",
    imageUrl: null,
    meals: [
      { name: "Cơm cá điêu hồng chiên xù", type: "Món chính", description: "Cá chiên giòn sốt cà, đậu bắp luộc mỡ hành, canh bí đao" },
      { name: "Cơm vịt quay sốt tiêu đen", type: "Món chính", description: "Vịt quay da giòn, cải ngọt xào dầu hào, canh rau dền thịt bằm" },
    ],
  },
]

const DAYS_CONFIG = [
  { key: 'monday', day: 'Thứ 2' },
  { key: 'tuesday', day: 'Thứ 3' },
  { key: 'wednesday', day: 'Thứ 4' },
  { key: 'thursday', day: 'Thứ 5' },
]

export async function WeeklyMenuPreview() {
  const dbMenus = await getActiveWeeklyMenus()

  let previewMenus: PreviewMenuOption[] = []

  if (dbMenus && dbMenus.length > 0) {
    previewMenus = dbMenus.map((menu: any) => {
      const days = DAYS_CONFIG.filter((d) => menu[d.key] && (menu[d.key].mainDish || menu[d.key].sideDish)).map((d) => {
        const item = menu[d.key]
        let imageUrl: string | null = null
        if (item.image && typeof item.image === 'object' && 'url' in item.image && item.image.url) {
          imageUrl = String(item.image.url)
        }

        return {
          day: d.day,
          imageUrl,
          meals: [
            {
              name: item.mainDish || 'Món chính thay đổi theo ca',
              type: 'Món chính',
              description: item.sideDish ? `Kèm: ${item.sideDish}` : 'Cơm trắng, rau xào theo mùa',
            },
            {
              name: item.soup || 'Canh nóng theo ngày',
              type: 'Món canh & Tráng miệng',
              description: item.dessert ? `Tráng miệng: ${item.dessert}` : 'Đảm bảo nóng sốt, cân bằng dinh dưỡng',
            },
          ],
        }
      })

      return {
        id: menu.id,
        title: menu.weekTitle || 'Thực đơn tuần',
        priceRange: menu.priceRange || '30.000đ - 35.000đ/suất',
        days: days.length > 0 ? days : defaultMenus,
      }
    })
  } else {
    previewMenus = [
      {
        id: 'default',
        title: 'Thực Đơn Tiêu Chuẩn Tuần Này',
        priceRange: '30.000đ - 35.000đ/suất',
        days: defaultMenus,
      },
    ]
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent-500 uppercase tracking-wider mb-2 sm:mb-3">
            Thực đơn cập nhật liên tục
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug md:leading-tight">
            Thực Đơn Suất Ăn Áp Dụng Trong Tuần
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Khẩu phần đa dạng, đổi món mỗi ngày, cân đối đầy đủ 4 nhóm chất dinh dưỡng theo tiêu chuẩn y tế
          </p>
        </div>

        {/* Menu Preview Interactive Viewer */}
        <WeeklyMenuPreviewClient menus={previewMenus} />
      </div>
    </section>
  )
}

export default WeeklyMenuPreview
