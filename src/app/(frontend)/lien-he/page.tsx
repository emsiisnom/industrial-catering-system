import React from 'react'
import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { ContactForm } from '@/components/forms/ContactForm'
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Liên Hệ Đơn Vị Cung Cấp Suất Ăn Công Nghiệp | Hotline 24/7',
  description:
    'Thông tin liên hệ, địa chỉ hệ thống bếp trung tâm tại Bắc Ninh, Hải Phòng, Bình Dương, TP.HCM. Hỗ trợ tư vấn giải pháp bếp ăn công nghiệp 24/7.',
  alternates: {
    canonical: '/lien-he',
  },
}

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-50/70 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <Breadcrumbs items={[{ label: 'Liên hệ' }]} />
          <div className="max-w-3xl mt-3 sm:mt-4">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-100/80 px-3 py-1 rounded-full">
              Kết Nối Với Chúng Tôi
            </span>
            <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-[1.25]">
              Liên Hệ Hợp Tác & Hỗ Trợ Doanh Nghiệp
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Quý khách có nhu cầu khảo sát bếp, báo giá hoặc phản ánh chất lượng dịch vụ, vui lòng liên hệ qua các kênh thông tin dưới đây.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Thông tin liên hệ & Văn phòng */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Trụ Sở Chính & Bếp Trung Tâm Miền Bắc</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Lô CN-06, Đường D1, KCN Yên Phong mở rộng, Xã Yên Trung, Huyện Yên Phong, Tỉnh Bắc Ninh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Chi Nhánh & Bếp Trung Tâm Miền Nam</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    Lô C2, Đường N2, KCN Đại Đăng, Phường Phú Tân, TP. Thủ Dầu Một, Tỉnh Bình Dương
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Hotline Kinh Doanh & Báo Giá (24/7)</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    <a href="tel:0912345678" className="text-green-700 font-bold hover:underline">
                      0912.345.678
                    </a>{' '}
                    (Mr. Hùng - Trưởng phòng Kinh doanh B2B)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Hộp Thư Điện Tử</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    kinhdoanh@suatancn.com | lienhe@suatancn.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Thời Gian Hoạt Động</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Vận hành bếp và giao suất ăn 24/7 cho tất cả các ca ngày và đêm (Kể cả Lễ, Tết).
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-gray-50 border border-gray-200">
              <div className="aspect-[16/9] w-full rounded-xl bg-gray-200 flex items-center justify-center text-gray-500 text-xs text-center p-4">
                <span>[Bản đồ vị trí KCN Yên Phong & KCN Đại Đăng tích hợp Google Maps]</span>
              </div>
            </div>
          </div>

          {/* Form liên hệ nhanh */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Gửi Yêu Cầu Cho Ban Quản Lý</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              Vui lòng điền thông tin bên dưới, chuyên viên chăm sóc khách hàng doanh nghiệp sẽ chủ động liên hệ lại với quý khách trong thời gian sớm nhất.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
