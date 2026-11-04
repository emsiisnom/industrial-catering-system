import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Nguyễn Văn Hùng',
    position: 'Trưởng ban Quản lý Hành chính & Nhân sự',
    company: 'Công ty TNHH Điện tử Texcon (KCN Quế Võ, Bắc Ninh)',
    content:
      'Chúng tôi đã hợp tác hơn 3 năm với quy mô 2.500 suất/ngày. Chất lượng món ăn luôn đồng đều, đảm bảo dinh dưỡng và đặc biệt chưa từng xảy ra sự cố an toàn thực phẩm. Đội ngũ phục vụ chuyên nghiệp, tiếp thu phản hồi nhanh.',
    rating: 5,
    mealCount: '2.500 suất/ngày',
  },
  {
    name: 'Trần Thị Mai Phương',
    position: 'Giám đốc Điều hành',
    company: 'Tập đoàn Dệt may Việt Long (KCN Tân Tạo, TP.HCM)',
    content:
      'Thực đơn thay đổi theo tuần, phong phú và hợp khẩu vị người lao động từ nhiều vùng miền. Tỷ lệ công nhân hài lòng với bữa ăn ca tăng từ 72% lên 94% sau khi chuyển sang dịch vụ tại đây. Rất đáng tin cậy!',
    rating: 5,
    mealCount: '1.800 suất/ngày',
  },
  {
    name: 'Phạm Đức Toàn',
    position: 'Phó Giám đốc Sản xuất',
    company: 'Nhà máy Cơ khí Chính xác Daeshin (KCN Tràng Duệ, Hải Phòng)',
    content:
      'Quy trình vận hành bếp một chiều và lưu mẫu thức ăn 24h nghiêm ngặt giúp ban lãnh đạo hoàn toàn an tâm. Vào các đợt cao điểm tăng ca, suất ăn đêm vẫn được giao nóng sốt đúng giờ.',
    rating: 5,
    mealCount: '1.200 suất/ngày',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-green-700 font-semibold text-xs sm:text-sm uppercase tracking-wider bg-green-100 px-3 py-1 rounded-full">
            Đánh Giá Khách Hàng
          </span>
          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Khách Hàng Doanh Nghiệp Nói Gì Về Chúng Tôi?
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600">
            Sự hài lòng và sức khỏe của hàng chục nghìn người lao động là minh chứng rõ nhất cho chất lượng dịch vụ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              className="bg-white border-gray-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-green-200" />
                </div>

                <p className="text-gray-700 italic text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>

                <div className="pt-5 border-t border-gray-100 mt-auto">
                  <div className="font-bold text-gray-900 text-sm sm:text-base">{item.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.position}</div>
                  <div className="text-xs font-semibold text-green-700 mt-1 line-clamp-1">
                    {item.company}
                  </div>
                  <div className="inline-block mt-2 text-xs bg-green-50 text-green-800 font-medium px-2 py-0.5 rounded">
                    Quy mô: {item.mealCount}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
