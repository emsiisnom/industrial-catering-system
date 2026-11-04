import React from 'react'
import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { Camera, Image as ImageIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thư Viện Hình Ảnh Thực Tế Bếp Ăn, Dây Chuyền Chế Biến & Khay Ăn Ca',
  description:
    'Tham quan hình ảnh thực tế bếp ăn trung tâm 5.000m², dây chuyền chia suất ăn tự động, hình ảnh các khay ăn ca và đội ngũ đầu bếp chuyên nghiệp.',
  alternates: {
    canonical: '/hinh-anh',
  },
}

const galleries = [
  {
    category: 'Cơ sở vật chất bếp',
    title: 'Khu sơ chế thực phẩm sống theo chuẩn một chiều',
    desc: 'Hệ thống bồn rửa inox 304 phân loại riêng cho thịt, cá và rau củ.',
  },
  {
    category: 'Cơ sở vật chất bếp',
    title: 'Dây chuyền nấu cơm công nghiệp tự động',
    desc: 'Tủ nấu cơm hơi công suất 200kg gạo/mẻ, hạt cơm dẻo thơm chín đều.',
  },
  {
    category: 'Suất ăn thực tế',
    title: 'Khay ăn ca 35.000đ tiêu chuẩn nhà máy điện tử',
    desc: 'Sườn kho tiêu, cá chiên giòn, rau muống xào tỏi, canh cua và dưa hấu.',
  },
  {
    category: 'Suất ăn thực tế',
    title: 'Khay ăn ca 40.000đ cho công nhân ngành nặng',
    desc: 'Thịt bò xào ớt chuông, trứng ốp la, đậu hũ sốt cà chua và canh bí tôm.',
  },
  {
    category: 'Vận hành & Phục vụ',
    title: 'Đội xe tải chuyên dụng có khoang giữ nhiệt',
    desc: 'Bảo quản nhiệt độ khay ăn trên 65°C trong suốt quãng đường di chuyển.',
  },
  {
    category: 'Vận hành & Phục vụ',
    title: 'Khu vực lưu mẫu thực phẩm 24h có niêm phong',
    desc: 'Tủ bảo ôn chuyên dụng được kiểm tra nhiệt độ 3 lần/ngày bởi kỹ sư vi sinh.',
  },
  {
    category: 'Đội ngũ nhân sự',
    title: 'Tập huấn định kỳ về vệ sinh an toàn thực phẩm',
    desc: '100% nhân viên có chứng chỉ khám sức khỏe định kỳ và thẻ xanh an toàn.',
  },
  {
    category: 'Tiệc sự kiện',
    title: 'Buffet tất niên Year End Party cho 1.500 công nhân',
    desc: 'Hơn 30 món ăn Á - Âu phong phú tại sân vận động nhà máy.',
  },
]

export default function GalleryPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-50/70 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <Breadcrumbs items={[{ label: 'Thư viện hình ảnh' }]} />
          <div className="max-w-3xl mt-3 sm:mt-4">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-100/80 px-3 py-1 rounded-full">
              Thực Tế & Minh Bạch
            </span>
            <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-[1.25]">
              Hình Ảnh Hoạt Động & Cơ Sở Vật Chất
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Cái nhìn chân thực nhất về cơ sở hạ tầng, trang thiết bị máy móc hiện đại và những bữa ăn ca đầy đủ sắc hương vị mỗi ngày.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Images */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleries.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 overflow-hidden bg-white hover:border-green-600 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 via-green-50 to-gray-200 flex flex-col items-center justify-center p-6 text-center relative group-hover:scale-105 transition-transform duration-300">
                <ImageIcon className="w-10 h-10 text-green-700/60 mb-2" />
                <span className="text-xs font-semibold text-gray-500 bg-white/80 px-2 py-0.5 rounded">
                  {item.category}
                </span>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-gray-900 text-xs sm:text-sm mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
