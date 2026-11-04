'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Calendar, Utensils, CheckCircle2, Download, Sparkles, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export interface ProcessedDayItem {
  day: string
  date: string
  mainDish: string
  sideDish: string
  soup: string
  dessert: string
  calories: string
  imageUrl: string | null
  note?: string | null
}

export interface ProcessedWeeklyMenu {
  id: string | number
  weekTitle: string
  priceRange: string
  description?: string
  generalNotes?: string | null
  days: ProcessedDayItem[]
}

interface WeeklyMenuViewerProps {
  menus: ProcessedWeeklyMenu[]
}

export function WeeklyMenuViewer({ menus }: WeeklyMenuViewerProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const currentMenu = menus[selectedIndex] || menus[0]

  if (!currentMenu) {
    return (
      <div className="text-center py-16 text-gray-500">
        Hiện chưa có thực đơn nào đang áp dụng. Vui lòng quay lại sau!
      </div>
    )
  }

  return (
    <div>
      {/* Header / Intro Section */}
      <div className="bg-gradient-to-b from-green-50/70 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-100/80 px-3 py-1 rounded-full">
                  Đang Áp Dụng Tuần Này
                </span>
                {currentMenu.priceRange && (
                  <span className="text-amber-800 font-bold text-xs bg-amber-100/90 px-3 py-1 rounded-full border border-amber-200">
                    Định mức: {currentMenu.priceRange}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug sm:leading-snug md:leading-[1.25] transition-all">
                {currentMenu.weekTitle}
              </h1>

              <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                {currentMenu.description ||
                  (currentMenu.priceRange.includes('50.000') || currentMenu.priceRange.includes('65.000')
                    ? 'Thực đơn cao cấp thiết kế dành riêng cho chuyên gia, kỹ sư và khối văn phòng với nguồn nguyên liệu tươi ngon chọn lọc (Bò Úc, Cá hồi, Tôm sú...), chế biến đa dạng phong cách Á - Âu.'
                    : 'Thực đơn tiêu chuẩn định lượng calo khoa học, đảm bảo đầy đủ 4 nhóm chất: Đường bột, Đạm, Béo, Vitamin & Khoáng chất giúp công nhân duy trì năng lượng làm việc bền bỉ suốt ca.')}
              </p>

              {/* Selector Tabs khi có từ 2 thực đơn trở lên */}
              {menus.length > 1 && (
                <div className="mt-6 pt-4 border-t border-gray-200/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-green-600" />
                    <span>Chọn Phân Khúc Thực Đơn Cần Xem:</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5 sm:gap-3">
                    {menus.map((menu, idx) => {
                      const isActive = idx === selectedIndex
                      return (
                        <button
                          key={menu.id}
                          onClick={() => setSelectedIndex(idx)}
                          className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-left font-medium transition-all duration-200 cursor-pointer ${
                            isActive
                              ? 'bg-green-700 text-white shadow-md shadow-green-700/20 ring-2 ring-green-700'
                              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:border-green-600 shadow-sm'
                          }`}
                        >
                          <span
                            className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                              isActive ? 'bg-amber-300 animate-pulse' : 'bg-gray-400 group-hover:bg-green-500'
                            }`}
                          />
                          <div className="flex flex-col">
                            <span className="text-xs sm:text-sm font-bold leading-tight">
                              {menu.weekTitle}
                            </span>
                            <span
                              className={`text-[11px] font-semibold ${
                                isActive ? 'text-green-100' : 'text-green-700'
                              }`}
                            >
                              {menu.priceRange}
                            </span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>

            <div>
              <Button
                asChild
                className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white gap-2 cursor-pointer font-semibold min-h-[44px]"
              >
                <Link href="/bao-gia" className="flex items-center justify-center">
                  <Download className="w-4 h-4" />
                  <span>Tải Bảng Thực Đơn 4 Tuần (PDF)</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Cards Grid */}
      <section className="py-10 sm:py-14 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {currentMenu.days.map((item, index) => (
            <Card
              key={index}
              className="border-gray-200/90 hover:border-green-600 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3 sm:pb-4 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                      {item.day}
                    </h3>
                    <div className="text-xs text-gray-500 mt-0.5">{item.date}</div>
                  </div>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded">
                    {item.calories}
                  </span>
                </div>

                {item.imageUrl && (
                  <div className="mb-4 rounded-xl overflow-hidden aspect-[16/10] bg-gray-50 border border-gray-100 shadow-inner">
                    <img
                      src={item.imageUrl}
                      alt={`Khay cơm ${item.day}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm">
                  <div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-green-800 bg-green-100/60 px-2 py-0.5 rounded">
                      Món Chính (Chọn 1 trong 2)
                    </span>
                    <p className="text-gray-900 font-semibold mt-1 leading-snug">
                      {item.mainDish}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                      Món Phụ / Xào
                    </span>
                    <p className="text-gray-700 mt-1">{item.sideDish}</p>
                  </div>

                  <div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                      Canh Nóng
                    </span>
                    <p className="text-gray-700 mt-1">{item.soup}</p>
                  </div>

                  <div>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      Tráng Miệng
                    </span>
                    <p className="text-gray-700 mt-1 font-medium">{item.dessert}</p>
                  </div>

                  {item.note && (
                    <div className="pt-2 text-[11px] text-amber-800 italic bg-amber-50/60 px-2.5 py-1.5 rounded-lg border border-amber-100">
                      * {item.note}
                    </div>
                  )}
                </div>

                <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 text-[11px] sm:text-xs text-gray-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Cơm trắng & nước chấm gia vị phục vụ tự do thoải mái</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cam kết / Ghi chú chung */}
        {currentMenu.generalNotes && (
          <div className="mt-8 bg-green-50/70 border border-green-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-green-900 leading-relaxed">
              <span className="font-bold">Cam kết chất lượng thực đơn: </span>
              {currentMenu.generalNotes}
            </div>
          </div>
        )}

        {/* Note về thực đơn tùy chỉnh theo ngân sách */}
        <div className="mt-10 sm:mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-green-600 shrink-0" />
              <span>Doanh Nghiệp Của Bạn Cần Thực Đơn Riêng Theo Ngân Sách?</span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Chúng tôi có đội ngũ bác sĩ dinh dưỡng sẵn sàng xây dựng thực đơn chuyên biệt cho công nhân lao động nặng, khối văn phòng, tiệc chuyên gia, hoặc chế độ ăn kiêng, ăn chay, Halal...
            </p>
          </div>
          <Button
            asChild
            className="w-full md:w-auto bg-green-700 hover:bg-green-800 text-white shrink-0 cursor-pointer min-h-[44px]"
          >
            <Link href="/bao-gia" className="flex items-center justify-center">
              Tùy biến thực đơn ngay
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
