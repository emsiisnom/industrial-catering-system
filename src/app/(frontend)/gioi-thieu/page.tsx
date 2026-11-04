import React from 'react'
import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { CheckCircle2, Target, Eye, HeartHandshake, Award, ShieldAlert, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Giới Thiệu Về Chúng Tôi | Năng Lực Cung Cấp Suất Ăn Công Nghiệp Hàng Đầu',
  description:
    'Tìm hiểu lịch sử phát triển, tầm nhìn, sứ mệnh và năng lực bếp ăn công nghiệp với công suất 35.000 suất/ngày của chúng tôi.',
  alternates: {
    canonical: '/gioi-thieu',
  },
}

const milestones = [
  { year: '2010', title: 'Khởi đầu với bếp ăn tập thể', desc: 'Thành lập cơ sở đầu tiên phục vụ 500 suất/ngày cho các xưởng may tại KCN Sóng Thần.' },
  { year: '2015', title: 'Đạt chuẩn ISO 22000 & HACCP', desc: 'Đầu tư dây chuyền bếp một chiều tự động hóa, mở rộng công suất lên 10.000 suất/ngày.' },
  { year: '2019', title: 'Mở rộng chi nhánh miền Bắc', desc: 'Khánh thành tổ hợp bếp trung tâm 5.000m² tại Bắc Ninh phục vụ các tập đoàn FDI công nghệ.' },
  { year: '2024', title: 'Chuyển đổi số & Dinh dưỡng cá nhân hóa', desc: 'Ứng dụng phần mềm quản lý khẩu phần dinh dưỡng và hệ thống giám sát nhiệt độ IoT.' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-green-50/70 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <Breadcrumbs items={[{ label: 'Giới thiệu' }]} />
          <div className="max-w-3xl mt-3 sm:mt-4">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-100/80 px-3 py-1 rounded-full">
              Về Chúng Tôi
            </span>
            <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Kiến Tạo Bữa Ăn Ca Khỏe Mạnh & An Toàn Cho Người Lao Động
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Với hơn 15 năm kinh nghiệm đồng hành cùng các tập đoàn hàng đầu Việt Nam, chúng tôi hiểu rằng mỗi suất ăn không chỉ là bữa cơm no, mà là nguồn năng lượng tái tạo năng suất lao động bền vững.
            </p>
          </div>
        </div>
      </div>

      {/* Mission / Vision / Values */}
      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-green-50/50 to-white border border-green-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center mb-5 sm:mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Sứ Mệnh</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Cung cấp các bữa ăn ca an toàn, đủ chất, ngon miệng với chi phí tối ưu nhất cho doanh nghiệp; đồng thời nâng cao thể trạng người lao động Việt Nam.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-green-50/50 to-white border border-green-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center mb-5 sm:mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Tầm Nhìn</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Trở thành thương hiệu cung cấp dịch vụ ẩm thực công nghiệp và chuỗi bếp ăn tập thể hàng đầu Đông Nam Á, dẫn đầu về tiêu chuẩn an toàn và công nghệ số.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-green-50/50 to-white border border-green-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-green-600 text-white flex items-center justify-center mb-5 sm:mb-6">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Giá Trị Cốt Lõi</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              <strong>Tâm - Tín - Chuẩn:</strong> Nấu ăn bằng cái tâm tử tế, giữ chữ tín cam kết về thời gian & số lượng, tuân thủ tuyệt đối quy chuẩn vệ sinh an toàn thực phẩm.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers / Capacity */}
      <section className="py-12 sm:py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Năng Lực Phục Vụ Quy Mô Lớn</h2>
            <p className="mt-2.5 text-sm sm:text-base text-gray-600">Được đầu tư bài bản từ cơ sở vật chất, đội ngũ đầu bếp đến chuỗi logistics giữ nhiệt chuyên dụng.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-4 sm:p-6 bg-white rounded-2xl border border-gray-200">
              <div className="text-2xl sm:text-4xl font-extrabold text-green-700">35.000+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2 font-medium">Công suất suất ăn/ngày</div>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-2xl border border-gray-200">
              <div className="text-2xl sm:text-4xl font-extrabold text-green-700">6.000 m²</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2 font-medium">Tổng diện tích bếp trung tâm</div>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-2xl border border-gray-200">
              <div className="text-2xl sm:text-4xl font-extrabold text-green-700">45+ Xe</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2 font-medium">Xe tải giữ nhiệt chuyên dụng</div>
            </div>
            <div className="p-4 sm:p-6 bg-white rounded-2xl border border-gray-200">
              <div className="text-2xl sm:text-4xl font-extrabold text-green-700">450+</div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2 font-medium">Đầu bếp & nhân sự phục vụ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Chặng Đường 15 Năm Phát Triển</h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-600">Những dấu mốc khẳng định vị thế đối tác chiến lược của các doanh nghiệp sản xuất.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {milestones.map((item, idx) => (
            <div key={idx} className="relative p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className="text-2xl sm:text-3xl font-black text-green-700 mb-2">{item.year}</div>
              <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CertificationsSection />
      <CTASection />
    </div>
  )
}
