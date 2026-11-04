import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PhoneCall, ArrowRight, ShieldCheck, Clock, CheckCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-green-800 via-green-900 to-emerald-950 text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-green-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="inline-flex items-center gap-2 bg-green-700/50 border border-green-500/30 text-green-200 text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full mb-5">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              Cam kết chất lượng chuẩn ISO 22000 & HACCP
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-tight">
              Sẵn Sàng Nâng Tầm Bữa Ăn Ca Cho Doanh Nghiệp Của Bạn?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-green-100/90 max-w-2xl leading-relaxed mb-6 sm:mb-8">
              Để lại thông tin để nhận bảng báo giá chi tiết, thực đơn mẫu 4 tuần và đăng ký dùng thử suất ăn mẫu trực tiếp tại nhà máy của bạn hoàn toàn miễn phí.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-green-200">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" />
                <span>Ăn thử miễn phí 3-5 ngày</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-green-200">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" />
                <span>Báo giá nhanh trong 30 phút</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-green-200">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" />
                <span>Hợp đồng minh bạch, VAT đầy đủ</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-lg shadow-orange-500/25 cursor-pointer min-h-[46px]"
              >
                <Link href="/bao-gia" className="flex items-center justify-center gap-2">
                  <span>Yêu Cầu Báo Giá & Dùng Thử</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-green-400/40 text-white hover:bg-green-800/50 hover:text-white px-5 sm:px-6 py-5 sm:py-6 text-sm sm:text-base cursor-pointer min-h-[46px]"
              >
                <a href="tel:0912345678" className="flex items-center justify-center gap-2">
                  <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                  <span>Hotline: 0912.345.678</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-8 border border-white/15">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-400" />
              Tư Vấn Nhanh 24/7
            </h3>
            <p className="text-xs sm:text-sm text-green-100/80 mb-5 sm:mb-6">
              Đội ngũ chuyên viên tư vấn dinh dưỡng và vận hành bếp ăn công nghiệp luôn sẵn sàng hỗ trợ khảo sát tận nơi.
            </p>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-green-100">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Khảo sát mặt bằng bếp:</span>
                <span className="font-semibold text-green-300">Miễn phí</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Xây dựng thực đơn calo:</span>
                <span className="font-semibold text-green-300">Tùy biến</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Thời gian phản hồi báo giá:</span>
                <span className="font-semibold text-green-300">&lt; 30 Phút</span>
              </li>
              <li className="flex justify-between pt-1">
                <span>Phạm vi phục vụ:</span>
                <span className="font-semibold text-green-300">Toàn miền Bắc & Nam</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
