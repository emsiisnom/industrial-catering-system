import React from 'react'
import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { ShieldCheck, FileText, CheckCircle2, AlertTriangle, Scale, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chính Sách Chất Lượng, Cam Kết An Toàn Thực Phẩm & Bảo Mật Dữ Liệu',
  description:
    'Cam kết tiêu chuẩn chất lượng dịch vụ, quy định xử lý sự cố an toàn thực phẩm, bảo hiểm trách nhiệm sản phẩm 20 tỷ và chính sách bảo mật khách hàng B2B.',
  alternates: {
    canonical: '/chinh-sach',
  },
}

export default function PolicyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-50/70 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <Breadcrumbs items={[{ label: 'Chính sách & Cam kết' }]} />
          <div className="max-w-3xl mt-3 sm:mt-4">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-100/80 px-3 py-1 rounded-full">
              Quy Chuẩn Hoạt Động
            </span>
            <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-[1.25]">
              Chính Sách Chất Lượng & Cam Kết Dịch Vụ
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Minh bạch và chuẩn hóa là nền tảng để xây dựng mối quan hệ hợp tác đối tác chiến lược bền vững lâu dài.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8 sm:space-y-12">
        {/* Cam kết 1 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7 text-green-700 shrink-0" />
            <span>1. Cam Kết Vệ Sinh An Toàn Thực Phẩm (VSATTP)</span>
          </h2>
          <div className="text-gray-600 space-y-3 leading-relaxed text-xs sm:text-base">
            <p>
              Chúng tôi cam kết tuân thủ 100% quy chuẩn vệ sinh an toàn thực phẩm theo quy định hiện hành của Bộ Y Tế Việt Nam và các tiêu chuẩn quốc tế ISO 22000:2018, HACCP Codex 2020:
            </p>
            <ul className="space-y-2 pl-2 sm:pl-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Nguồn nguyên liệu tươi sống (thịt, cá, gia cầm, rau củ) đều có đầy đủ hóa đơn kiểm định nguồn gốc từ các trang trại VietGAP.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Không sử dụng hóa chất cấm, hàn the, phẩm màu công nghiệp hay dầu mỡ chiên đi chiên lại nhiều lần.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 shrink-0 mt-0.5" />
                <span>Thực hiện nghiêm túc việc lưu mẫu thức ăn 24 giờ của tất cả các món ăn theo quy định của Cục An toàn thực phẩm.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Cam kết 2 */}
        <section className="space-y-4 border-t border-gray-100 pt-6 sm:pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
            <Scale className="w-6 h-6 sm:w-7 sm:h-7 text-green-700 shrink-0" />
            <span>2. Cam Kết Trách Nhiệm Pháp Lý & Bảo Hiểm Sản Phẩm</span>
          </h2>
          <div className="text-gray-600 space-y-3 leading-relaxed text-xs sm:text-base">
            <p>
              Nhằm đảm bảo quyền lợi tối thượng cho đối tác doanh nghiệp và sức khỏe của người lao động:
            </p>
            <div className="p-4 bg-green-50 rounded-xl border border-green-200 text-green-900 font-medium text-xs sm:text-sm">
              Chúng tôi đã mua Bảo hiểm Trách nhiệm Sản phẩm tại Tổng công ty Cổ phần Bảo hiểm Quân Đội (MIC) với hạn mức bồi thường tối đa 20.000.000.000 VNĐ (Hai mươi tỷ đồng) cho mỗi sự cố.
            </div>
            <p>
              Trong trường hợp xảy ra sự cố ngộ độc thực phẩm do lỗi từ bữa ăn của chúng tôi cung cấp, chúng tôi chịu trách nhiệm chi trả toàn bộ viện phí, bồi thường thiệt hại và chịu chế tài trước pháp luật.
            </p>
          </div>
        </section>

        {/* Cam kết 3 */}
        <section className="space-y-4 border-t border-gray-100 pt-6 sm:pt-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3">
            <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-green-700 shrink-0" />
            <span>3. Chính Sách Giao Hàng & Đảm Bảo Nhiệt Độ</span>
          </h2>
          <div className="text-gray-600 space-y-3 leading-relaxed text-xs sm:text-base">
            <p>
              - Suất ăn được vận chuyển bằng xe chuyên dụng giữ nhiệt và cam kết có mặt tại địa điểm phân phối trước giờ ăn tối thiểu 30 phút.
            </p>
            <p>
              - Nhiệt độ của cơm và canh khi đến bàn ăn người lao động luôn đảm bảo trên 65°C.
            </p>
            <p>
              - Trong trường hợp bất khả kháng (sự cố giao thông nghiêm trọng...), chúng tôi kích hoạt ngay phương án dự phòng từ trạm cung cấp vệ tinh gần nhất trong bán kính 10km.
            </p>
          </div>
        </section>

        {/* Cam kết 4 */}
        <section className="space-y-4 border-t border-gray-100 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <Lock className="w-7 h-7 text-green-700 shrink-0" />
            4. Chính Sách Bảo Mật Dữ Liệu Khách Hàng
          </h2>
          <div className="text-gray-600 space-y-3 leading-relaxed text-sm sm:text-base">
            <p>
              Mọi thông tin liên quan đến quy mô nhân sự, ca làm việc, cấu trúc chi phí và điều khoản hợp đồng của đối tác được bảo mật tuyệt đối theo thỏa thuận NDA ký kết giữa hai bên.
            </p>
          </div>
        </section>
      </div>

      <CTASection />
    </div>
  )
}
