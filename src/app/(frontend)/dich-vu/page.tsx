import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { Button } from '@/components/ui/button'
import {
  Factory,
  Building,
  GraduationCap,
  Sparkles,
  CheckCircle,
  Truck,
  Flame,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dịch Vụ Suất Ăn Công Nghiệp, Văn Phòng, Trường Học & Tiệc Doanh Nghiệp',
  description:
    'Cung cấp các gói giải pháp suất ăn công nghiệp trọn gói: Nấu tại chỗ, chia khay vận chuyển, suất ăn văn phòng cao cấp, suất ăn trường học và tiệc doanh nghiệp.',
  alternates: {
    canonical: '/dich-vu',
  },
}

const serviceList = [
  {
    id: 'nha-may',
    icon: Factory,
    title: 'Suất Ăn Nhà Máy & Khu Công Nghiệp',
    tag: 'Dịch vụ chủ lực',
    desc: 'Phục vụ hàng nghìn công nhân viên mỗi ca với thực đơn giàu năng lượng, cân đối dinh dưỡng và đảm bảo an toàn tuyệt đối.',
    features: [
      'Định mức linh hoạt: 25.000đ - 35.000đ - 45.000đ/suất',
      'Đổi mới thực đơn 4 tuần không trùng lặp món',
      'Phục vụ đa ca: Ca sáng, ca trưa, ca tối và tăng ca đêm',
      '2 phương án: Nấu trực tiếp tại bếp nhà máy hoặc chia khay mang tới',
    ],
    idealFor: 'Các nhà máy sản xuất linh kiện, dệt may, cơ khí, giày da, điện tử từ 200 - 10.000 lao động.',
  },
  {
    id: 'van-phong',
    icon: Building,
    title: 'Suất Ăn Văn Phòng & Doanh Nghiệp',
    tag: 'Tiêu chuẩn cao cấp',
    desc: 'Giải pháp cơm trưa văn phòng chuyên nghiệp, trình bày đẹp mắt, đóng gói khay bento thân thiện môi trường.',
    features: [
      'Định mức: 40.000đ - 65.000đ/suất',
      'Lựa chọn món tự chọn qua ứng dụng hoặc thực đơn tuần',
      'Đi kèm canh nóng, rau sạch, trái cây tráng miệng và nước giải khát',
      'Giao tận bàn làm việc đúng 11h30 mỗi ngày',
    ],
    idealFor: 'Các tòa nhà văn phòng, công ty công nghệ, ngân hàng, công ty tài chính.',
  },
  {
    id: 'truong-hoc',
    icon: GraduationCap,
    title: 'Suất Ăn Bán Trú Trường Học',
    tag: 'Dinh dưỡng phát triển',
    desc: 'Thiết kế riêng bởi chuyên gia dinh dưỡng học đường, phù hợp khẩu vị và hỗ trợ sự phát triển thể chất của học sinh.',
    features: [
      'Phân bổ calo khoa học theo độ tuổi (Mầm non, Tiểu học, Trung học)',
      '100% nguyên liệu tươi sạch, nguồn gốc xuất xứ rõ ràng có kiểm định',
      'Hạn chế dầu mỡ, chất béo chuyển hóa và gia vị nhân tạo',
      'Bổ sung canxi, vitamin và vi chất dinh dưỡng cần thiết',
    ],
    idealFor: 'Các trường quốc tế, trường tư thục, trường liên cấp bán trú.',
  },
  {
    id: 'tiec-su-kien',
    icon: Sparkles,
    title: 'Tiệc Sự Kiện & Hội Nghị Doanh Nghiệp',
    tag: 'Trọn gói chuyên nghiệp',
    desc: 'Tổ chức tiệc buffet, tiệc bàn tròn, tiệc tất niên, ngày hội gia đình và sự kiện khánh thành cho doanh nghiệp.',
    features: [
      'Thực đơn tiệc Á - Âu phong phú từ 180.000đ/suất',
      'Đầy đủ bàn ghế, dụng cụ tiệc và nhân sự phục vụ chu đáo',
      'Đáp ứng quy mô từ 50 đến 3.000 khách',
      'Set up nhanh chóng, dọn dẹp sạch sẽ trả lại mặt bằng',
    ],
    idealFor: 'Lễ kỷ niệm thành lập, tiệc tất niên Year End Party, hội nghị khách hàng.',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-50/70 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <Breadcrumbs items={[{ label: 'Dịch vụ' }]} />
          <div className="max-w-3xl mt-3 sm:mt-4">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-100/80 px-3 py-1 rounded-full">
              Giải Pháp Ẩm Thực B2B
            </span>
            <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-[1.25]">
              Các Gói Dịch Vụ Suất Ăn Doanh Nghiệp Toàn Diện
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Tùy biến linh hoạt theo quy mô, ngân sách và điều kiện hạ tầng của từng nhà máy hay văn phòng.
            </p>
          </div>
        </div>
      </div>

      {/* 2 hình thức vận hành chính */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8">
            2 Phương Thức Phục Vụ Linh Hoạt
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Phương thức 1: Nấu Trực Tiếp Tại Cơ Sở</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Chúng tôi tiếp quản và vận hành bếp ăn nội bộ của doanh nghiệp: Cử bếp trưởng, phụ bếp, nhân viên phục vụ; cung cấp nguồn thực phẩm sạch và quản lý theo chuẩn ISO.
                </p>
                <div className="text-xs text-green-700 font-semibold bg-green-50 p-3 rounded-lg mb-4">
                  Ưu điểm: Món ăn nóng sốt tức thì, tối ưu chi phí vận chuyển cho quy mô lớn trên 500 suất/ngày.
                </div>
              </div>
              <Button asChild variant="outline" className="w-full mt-4 border-green-600 text-green-700 font-semibold min-h-[44px]">
                <Link href="/bao-gia">Tư vấn vận hành bếp tại chỗ</Link>
              </Button>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Phương thức 2: Nấu Tại Bếp Trung Tâm & Giao Tận Nơi</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Món ăn được chế biến tại bếp trung tâm tiêu chuẩn 5.000m², đóng khay inox có nắp đậy hoặc thùng giữ nhiệt cách nhiệt, vận chuyển bằng xe tải chuyên dụng đến tận nhà ăn trước giờ ăn 30 phút.
                </p>
                <div className="text-xs text-green-700 font-semibold bg-green-50 p-3 rounded-lg mb-4">
                  Ưu điểm: Doanh nghiệp không cần diện tích nấu nướng, không lo mùi khói, sạch sẽ và tiện lợi.
                </div>
              </div>
              <Button asChild variant="outline" className="w-full mt-4 border-green-600 text-green-700 font-semibold min-h-[44px]">
                <Link href="/bao-gia">Tư vấn giao suất ăn tận nơi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chi tiết từng dịch vụ */}
      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {serviceList.map((srv, index) => {
          const Icon = srv.icon
          const isEven = index % 2 === 1
          return (
            <div
              key={srv.id}
              id={srv.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
            >
              <div className={`space-y-4 sm:space-y-5 ${isEven ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7 lg:order-1'}`}>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-green-700 bg-green-100/70 px-3 py-1 rounded-full">
                  <Icon className="w-4 h-4" />
                  {srv.tag}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{srv.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{srv.desc}</p>

                <div className="space-y-2.5 pt-2">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm">Điểm nổi bật của gói:</div>
                  {srv.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 sm:p-4 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-600">
                  <strong className="text-gray-900">Đối tượng phù hợp:</strong> {srv.idealFor}
                </div>

                <div className="pt-2">
                  <Button asChild className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white cursor-pointer min-h-[44px]">
                    <Link href="/bao-gia" className="flex items-center justify-center gap-2">
                      <span>Nhận báo giá gói này</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-green-100 via-gray-100 to-green-50 border border-gray-200 flex flex-col items-center justify-center p-6 sm:p-8 text-center shadow-inner">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-green-700 mb-3 sm:mb-4">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div className="font-bold text-gray-900 text-base sm:text-lg mb-1">{srv.title}</div>
                  <div className="text-xs text-gray-500 max-w-xs">
                    Hình ảnh thực tế bếp chế biến và khay ăn tiêu chuẩn phục vụ cho các đối tác FDI.
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      <CTASection />
    </div>
  )
}
