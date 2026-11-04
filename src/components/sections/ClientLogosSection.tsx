import React from 'react'
import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'

const partners = [
  { name: 'Samsung Electronics Bắc Ninh', sector: 'Điện tử công nghệ', scale: '4.500 suất/ngày' },
  { name: 'Foxconn KCN Quang Châu', sector: 'Lắp ráp vi mạch', scale: '6.000 suất/ngày' },
  { name: 'LG Display Hải Phòng', sector: 'Màn hình điện tử', scale: '3.200 suất/ngày' },
  { name: 'Honda Việt Nam', sector: 'Sản xuất ô tô xe máy', scale: '2.800 suất/ngày' },
  { name: 'Canon Việt Nam KCN Tiên Sơn', sector: 'Thiết bị quang học', scale: '3.000 suất/ngày' },
  { name: 'Tập đoàn Dệt may Phong Phú', sector: 'Dệt may & Xuất khẩu', scale: '2.100 suất/ngày' },
  { name: 'Thép Hòa Phát Dung Quất', sector: 'Công nghiệp nặng', scale: '5.000 suất/ngày' },
  { name: 'VinFast Tổ hợp Sản xuất', sector: 'Công nghiệp ô tô', scale: '3.800 suất/ngày' },
]

export function ClientLogosSection() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-50 px-3 py-1 rounded-full">
              Khách Hàng Tiêu Biểu
            </span>
            <h2 className="mt-2.5 text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
              Được Tin Chọn Bởi Các Doanh Nghiệp Hàng Đầu
            </h2>
          </div>
          <Link
            href="/khach-hang"
            className="text-green-700 hover:text-green-800 text-sm font-semibold flex items-center gap-1.5 group shrink-0"
          >
            <span>Xem hồ sơ năng lực & đối tác</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 rounded-2xl border border-gray-200/90 bg-gray-50/40 hover:bg-white hover:border-green-600 hover:shadow-sm transition-all"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700 mb-2.5 sm:mb-3">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="font-bold text-gray-900 text-xs sm:text-sm leading-snug line-clamp-2">
                {partner.name}
              </div>
              <div className="text-[11px] sm:text-xs text-gray-500 mt-1 line-clamp-1">{partner.sector}</div>
              <div className="mt-2.5 text-[10px] sm:text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded inline-block">
                {partner.scale}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
