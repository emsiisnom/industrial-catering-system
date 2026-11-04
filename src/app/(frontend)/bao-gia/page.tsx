import React from 'react'
import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { ShieldCheck, Clock, FileSpreadsheet, Gift, PhoneCall, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nhận Báo Giá Suất Ăn Công Nghiệp & Thực Đơn Mẫu Trong 30 Phút',
  description:
    'Đăng ký nhận bảng báo giá chi tiết, thực đơn 4 tuần và đăng ký ăn thử miễn phí cho nhà máy, công ty. Tư vấn định mức calo và chi phí tối ưu nhất.',
  alternates: {
    canonical: '/bao-gia',
  },
}

export default function QuotePage() {
  return (
    <div className="bg-gray-50/50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-14">
          <Breadcrumbs items={[{ label: 'Nhận báo giá' }]} />
          <div className="max-w-3xl mt-2 sm:mt-3">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-50 border border-green-200 px-3 py-1 rounded-full">
              Khảo Sát Nhu Cầu & Báo Giá Nhanh
            </span>
            <h1 className="mt-2.5 sm:mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-[1.25]">
              Yêu Cầu Báo Giá & Dùng Thử Suất Ăn Mẫu
            </h1>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Điền thông tin quy mô doanh nghiệp dưới đây, chúng tôi sẽ lập bảng dự toán chi phí chi tiết kèm thực đơn mẫu 4 tuần gửi đến bạn trong vòng 30 phút.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content with Form + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <QuoteForm />
          </div>

          {/* Sidebar / Trust signals Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Box Ưu đãi đặc biệt */}
            <div className="bg-gradient-to-br from-green-800 to-emerald-950 text-white rounded-2xl p-5 sm:p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-green-300 mb-4">
                <Gift className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Chương Trình Trải Nghiệm Bữa Ăn Mẫu
              </h3>
              <p className="text-xs sm:text-sm text-green-100/90 leading-relaxed mb-5 sm:mb-6">
                Để doanh nghiệp hoàn toàn yên tâm về chất lượng trước khi ký hợp đồng, chúng tôi gửi tặng:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-green-100">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0 mt-0.5" />
                  <span><strong>Ăn thử miễn phí:</strong> Phục vụ trực tiếp 5 - 10 suất ăn mẫu tại văn phòng ban giám đốc trong 3 ngày.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0 mt-0.5" />
                  <span><strong>Khảo sát bếp miễn phí:</strong> Kỹ sư ATTP đến tận nơi tư vấn cải tạo mặt bằng bếp theo chuẩn một chiều.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0 mt-0.5" />
                  <span><strong>Tặng bộ gia vị & tủ lưu mẫu:</strong> Áp dụng cho hợp đồng ký kết từ 12 tháng trở lên.</span>
                </li>
              </ul>
            </div>

            {/* Quy trình báo giá 4 bước */}
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm space-y-4">
              <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-700" />
                Quy Trình Xử Lý Báo Giá
              </h4>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-800 font-bold flex items-center justify-center shrink-0">1</div>
                  <div>
                    <div className="font-semibold text-gray-900">Tiếp nhận yêu cầu (5 phút)</div>
                    <div>Hệ thống ghi nhận và chuyển cho quản lý phụ trách khu vực của bạn.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-800 font-bold flex items-center justify-center shrink-0">2</div>
                  <div>
                    <div className="font-semibold text-gray-900">Liên hệ xác nhận (15 phút)</div>
                    <div>Chuyên viên gọi điện xác minh khẩu vị, ca làm việc và ngân sách mục tiêu.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-800 font-bold flex items-center justify-center shrink-0">3</div>
                  <div>
                    <div className="font-semibold text-gray-900">Gửi bảng báo giá & thực đơn (30 phút)</div>
                    <div>Bảng chiết tính chi phí chi tiết, dự thảo hợp đồng và thực đơn gửi qua email.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-800 font-bold flex items-center justify-center shrink-0">4</div>
                  <div>
                    <div className="font-semibold text-gray-900">Ăn thử mẫu & Ký hợp đồng</div>
                    <div>Mang đồ ăn thử trực tiếp đến nhà máy và hoàn tất thủ tục pháp lý.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hotline hỗ trợ ngay */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium">Cần báo giá khẩn cấp qua điện thoại?</div>
                <a href="tel:0912345678" className="text-lg font-bold text-green-800 hover:text-green-700">
                  0912.345.678 (24/7)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
