'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export interface PreviewMeal {
  name: string
  type: string
  description: string
}

export interface PreviewDay {
  day: string
  imageUrl: string | null
  meals: PreviewMeal[]
}

export interface PreviewMenuOption {
  id: string | number
  title: string
  priceRange: string
  days: PreviewDay[]
}

interface WeeklyMenuPreviewClientProps {
  menus: PreviewMenuOption[]
}

export function WeeklyMenuPreviewClient({ menus }: WeeklyMenuPreviewClientProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const currentMenu = menus[selectedIndex] || menus[0]

  if (!currentMenu) return null

  return (
    <div>
      {/* Switcher Pills (khi có từ 2 thực đơn trở lên) */}
      {menus.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="w-full text-center text-xs font-bold uppercase tracking-wider text-gray-500 mb-1 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span>Chọn phân khúc thực đơn tham khảo</span>
          </div>
          {menus.map((menu, idx) => {
            const isActive = idx === selectedIndex
            return (
              <button
                key={menu.id}
                onClick={() => setSelectedIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-green-700 text-white shadow-green-700/20 ring-2 ring-green-700'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:border-green-600'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-amber-300 animate-pulse' : 'bg-gray-400'
                  }`}
                />
                <span>{menu.title}</span>
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-green-800 text-green-100' : 'bg-green-50 text-green-700'
                  }`}
                >
                  {menu.priceRange}
                </span>
              </button>
            )
          })}
        </div>
      )}

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {currentMenu.days.map((day) => (
          <Card
            key={day.day}
            className="overflow-hidden border-gray-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="bg-primary-600 text-white text-center py-2.5 px-4">
                <span className="font-bold text-sm sm:text-base">{day.day}</span>
              </div>
              <CardContent className="p-4 sm:p-5 space-y-4">
                {day.imageUrl && (
                  <div className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-100 shadow-inner mb-3">
                    <img
                      src={day.imageUrl}
                      alt={`Khay cơm thực tế ${day.day}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                {day.meals.map((meal, idx) => (
                  <div key={idx}>
                    <Badge variant="secondary" className="mb-1.5 text-[10px]">
                      {meal.type}
                    </Badge>
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">
                      {meal.name}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{meal.description}</p>
                  </div>
                ))}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Link to full menu */}
      <div className="text-center mt-10">
        <Link
          href="/thuc-don"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
        >
          Xem chi tiết thực đơn trọn vẹn cả tuần
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
