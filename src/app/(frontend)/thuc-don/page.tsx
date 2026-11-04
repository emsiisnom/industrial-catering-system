import React from 'react'
import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { getActiveWeeklyMenus } from '@/lib/payload-utils'
import { WeeklyMenuViewer, type ProcessedWeeklyMenu, type ProcessedDayItem } from '@/components/menu/WeeklyMenuViewer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Thực Đơn Suất Ăn Công Nghiệp Theo Tuần | Đổi Món Mỗi Ngày, Cân Bằng Dinh Dưỡng',
  description:
    'Xem thực đơn tuần mới nhất của Suất Ăn Công Nghiệp: Thực đơn Tiêu chuẩn (30k-35k) và Thực đơn Cao cấp chuyên gia (50k-65k). Đầy đủ 4 nhóm chất, cân đối dinh dưỡng.',
  alternates: {
    canonical: '/thuc-don',
  },
}

const defaultWeekMenu: ProcessedDayItem[] = [
  {
    day: 'Thứ Hai',
    date: 'Khởi đầu tuần mới đầy năng lượng',
    mainDish: 'Thịt kho tàu nước dừa trứng cút / Cá diêu hồng chiên xù xốt chua ngọt',
    sideDish: 'Đậu cove xào thịt nạc băm',
    soup: 'Canh bí xanh nấu tôm khô hành hoa',
    dessert: 'Chuối già Nam Mỹ',
    calories: '750 - 820 kcal',
    imageUrl: null,
  },
  {
    day: 'Thứ Ba',
    date: 'Tươi mát & giàu vitamin',
    mainDish: 'Gà kho sả ớt đậm đà / Ba chỉ luộc chấm mắm tôm chua',
    sideDish: 'Bắp cải thảo xào dầu hào nấm hương',
    soup: 'Canh cua mồng tơi rau đay mướp hương',
    dessert: 'Dưa hấu Long An',
    calories: '780 - 840 kcal',
    imageUrl: null,
  },
  {
    day: 'Thứ Tư',
    date: 'Bổ sung khoáng chất & chất đạm',
    mainDish: 'Sườn heo non rim tiêu gừng / Tép xào hành hoa giòn rụm',
    sideDish: 'Đậu hũ non sốt cà chua hành lá',
    soup: 'Canh cải xoong nấu sườn băm',
    dessert: 'Thanh long ruột đỏ',
    calories: '760 - 830 kcal',
    imageUrl: null,
  },
  {
    day: 'Thứ Năm',
    date: 'Kích thích vị giác, dễ tiêu',
    mainDish: 'Bò xào ớt chuông cần tây / Cá thu Nhật kho mía ngọt thịt',
    sideDish: 'Su su xào tỏi giòn ngọt',
    soup: 'Canh chua cá lóc dọc mùng thì là',
    dessert: 'Ổi gọt sẵn chấm muối tôm Tây Ninh',
    calories: '790 - 850 kcal',
    imageUrl: null,
  },
  {
    day: 'Thứ Sáu',
    date: 'Thực đơn cải thiện cuối tuần',
    mainDish: 'Vịt nướng mật ong sốt tiêu đen / Trứng cuộn xúc xích phô mai',
    sideDish: 'Rau muống xào tỏi xanh mướt',
    soup: 'Canh súp củ quả hầm xương ống',
    dessert: 'Sữa chua men sống Vinamilk',
    calories: '800 - 860 kcal',
    imageUrl: null,
  },
  {
    day: 'Thứ Bảy',
    date: 'Nhẹ nhàng thanh mát cho ca tăng cường',
    mainDish: 'Thịt heo xá xíu mật ong / Chả cá thác lác chiên cốm xanh',
    sideDish: 'Cà tím nướng mỡ hành',
    soup: 'Canh rong biển đậu hũ thịt bằm',
    dessert: 'Cam sành Hàm Yên mọng nước',
    calories: '740 - 810 kcal',
    imageUrl: null,
  },
]

const DAYS_CONFIG = [
  { key: 'monday', day: 'Thứ Hai', defaultDate: 'Khởi đầu tuần mới đầy năng lượng' },
  { key: 'tuesday', day: 'Thứ Ba', defaultDate: 'Tươi mát & giàu vitamin' },
  { key: 'wednesday', day: 'Thứ Tư', defaultDate: 'Bổ sung khoáng chất & chất đạm' },
  { key: 'thursday', day: 'Thứ Năm', defaultDate: 'Kích thích vị giác, dễ tiêu' },
  { key: 'friday', day: 'Thứ Sáu', defaultDate: 'Thực đơn cải thiện cuối tuần' },
  { key: 'saturday', day: 'Thứ Bảy', defaultDate: 'Nhẹ nhàng thanh mát cho ca tăng cường' },
  { key: 'sunday', day: 'Chủ Nhật', defaultDate: 'Phục vụ theo đăng ký tăng ca' },
]

export default async function MenuPage() {
  const dbMenus = await getActiveWeeklyMenus()

  let processedMenus: ProcessedWeeklyMenu[] = []

  if (dbMenus && dbMenus.length > 0) {
    processedMenus = dbMenus.map((menu: any) => {
      const days: ProcessedDayItem[] = DAYS_CONFIG.filter(
        (d) => menu[d.key] && (menu[d.key].mainDish || menu[d.key].sideDish)
      ).map((d) => {
        const item = menu[d.key]
        let imageUrl: string | null = null
        if (item.image && typeof item.image === 'object' && 'url' in item.image && item.image.url) {
          imageUrl = String(item.image.url)
        }

        return {
          day: d.day,
          date: item.note || d.defaultDate,
          mainDish: item.mainDish || 'Món chính thay đổi theo ca',
          sideDish: item.sideDish || 'Rau xào tươi theo mùa',
          soup: item.soup || 'Canh nóng theo ngày',
          dessert: item.dessert || 'Trái cây tươi tráng miệng',
          calories: item.calories || '750 - 850 kcal',
          imageUrl,
          note: item.note || null,
        }
      })

      // Nếu không có tab nào có dữ liệu, dùng default
      const finalDays = days.length > 0 ? days : defaultWeekMenu

      return {
        id: menu.id,
        weekTitle: menu.weekTitle || 'Thực đơn áp dụng tuần này',
        priceRange: menu.priceRange || '30.000đ - 35.000đ/suất',
        generalNotes: menu.generalNotes || null,
        days: finalDays,
      }
    })
  } else {
    // Dữ liệu mẫu ban đầu nếu DB rỗng
    processedMenus = [
      {
        id: 'default-1',
        weekTitle: 'Thực Đơn Suất Ăn Tiêu Chuẩn (Tuần Này)',
        priceRange: '30.000đ - 35.000đ/suất',
        days: defaultWeekMenu,
      },
    ]
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <Breadcrumbs items={[{ label: 'Thực đơn tuần' }]} />
      </div>

      {/* Main Interactive Menu Viewer */}
      <WeeklyMenuViewer menus={processedMenus} />

      {/* Call to action section */}
      <CTASection />
    </div>
  )
}
