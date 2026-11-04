import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTASection } from '@/components/sections/CTASection'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, Users, MapPin, Calendar, Award, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Khách Hàng Tiêu Biểu & Dự Án Suất Ăn Doanh Nghiệp Đã Triển Khai',
  description:
    'Hồ sơ năng lực phục vụ hơn 200+ đối tác doanh nghiệp FDI và tập đoàn sản xuất lớn tại các khu công nghiệp Bắc Ninh, Hải Phòng, Bình Dương, Đồng Nai.',
  alternates: {
    canonical: '/khach-hang',
  },
}

const clientProjects = [
  {
    company: 'Samsung Electronics Việt Nam',
    location: 'KCN Yên Phong & KCN Quế Võ, Bắc Ninh',
    scale: '4.500 suất/ngày',
    duration: 'Từ 2017 đến nay (7 năm hợp tác)',
    industry: 'Sản xuất thiết bị di động & linh kiện cao cấp',
    detail:
      'Vận hành song song 2 nhà ăn công suất lớn, phục vụ 3 ca liên tục. Tỷ lệ đánh giá hài lòng định kỳ của người lao động đạt 96.8%.',
  },
  {
    company: 'Foxconn Interconnect Technology',
    location: 'KCN Quang Châu, Bắc Giang',
    scale: '6.000 suất/ngày',
    duration: 'Từ 2019 đến nay',
    industry: 'Gia công linh kiện vi điện tử',
    detail:
      'Hệ thống chia khay tự động và kiểm soát khẩu phần bằng quẹt thẻ nhân viên. Đảm bảo suất ăn nóng sốt trong khung giờ cao điểm chỉ 45 phút.',
  },
  {
    company: 'LG Display Hải Phòng',
    location: 'KCN Tràng Duệ, Hải Phòng',
    scale: '3.200 suất/ngày',
    duration: 'Từ 2020 đến nay',
    industry: 'Sản xuất màn hình OLED công nghệ cao',
    detail:
      'Thiết kế thực đơn kết hợp ẩm thực Hàn Quốc - Việt Nam, đáp ứng khẩu vị của cả chuyên gia nước ngoài và công nhân kỹ thuật.',
  },
  {
    company: 'Tập đoàn Dệt may Phong Phú',
    location: 'KCN Linh Trung & KCN Biên Hòa',
    scale: '2.800 suất/ngày',
    duration: 'Từ 2015 đến nay (9 năm)',
    industry: 'Dệt may & thời trang xuất khẩu',
    detail:
      'Thực đơn ưu tiên thanh nhiệt, giải độc và bồi bổ năng lượng cho công nhân ngành dệt may với chi phí tiết kiệm tối ưu cho doanh nghiệp.',
  },
  {
    company: 'Tổ hợp Chế tạo Ô tô VinFast',
    location: 'Khu kinh tế Đình Vũ - Cát Hải, Hải Phòng',
    scale: '3.800 suất/ngày',
    duration: 'Từ 2021 đến nay',
    industry: 'Công nghiệp nặng & Chế tạo ô tô điện',
    detail:
      'Định mức suất ăn giàu protein và khoáng chất, đáp ứng cường độ làm việc của kỹ sư và công nhân tại xưởng dập, xưởng hàn và lắp ráp pin.',
  },
  {
    company: 'Công ty Cổ phần Sữa TH True Milk',
    location: 'Nghĩa Đàn, Nghệ An',
    scale: '1.500 suất/ngày',
    duration: 'Từ 2022 đến nay',
    industry: 'Chế biến thực phẩm & đồ uống sạch',
    detail:
      'Tuân thủ tiêu chuẩn an toàn sinh học khắt khe bậc nhất ngành thực phẩm sạch. Kiểm soát 100% nguồn nước và vi sinh tại bếp ăn.',
  },
]

export default function ClientsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-green-50/70 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <Breadcrumbs items={[{ label: 'Khách hàng tiêu biểu' }]} />
          <div className="max-w-3xl mt-3 sm:mt-4">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-100/80 px-3 py-1 rounded-full">
              Hồ Sơ Năng Lực B2B
            </span>
            <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-[1.25]">
              Đồng Hành Cùng 200+ Doanh Nghiệp Hàng Đầu
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Kinh nghiệm phục vụ đa dạng các ngành nghề từ điện tử công nghệ cao, may mặc, luyện kim đến các cơ sở giáo dục quốc tế.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Projects */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clientProjects.map((client, index) => (
            <Card
              key={index}
              className="border-gray-200/90 hover:border-green-600 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <CardContent className="p-5 sm:p-8">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-2">
                  {client.company}
                </h3>
                <div className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-md inline-block mb-4">
                  {client.industry}
                </div>

                <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-600 border-t border-gray-100 pt-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Quy mô: <strong className="text-gray-900">{client.scale}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600 shrink-0" />
                    <span className="line-clamp-1">{client.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Thời gian: {client.duration}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 bg-gray-50 p-3.5 rounded-xl border border-gray-100 leading-relaxed">
                  {client.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Audit Callout */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-green-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold">Quý Doanh Nghiệp Cần Tham Quan Trực Tiếp Bếp Ăn?</h3>
            <p className="text-xs sm:text-sm text-green-200 leading-relaxed">
              Chúng tôi hân hạnh đón tiếp ban lãnh đạo và chuyên viên hành chính nhân sự đến tham quan cơ sở bếp mẫu và quy trình vận hành thực tế tại bất kỳ cơ sở nào.
            </p>
          </div>
          <Button asChild size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold shrink-0 cursor-pointer min-h-[46px]">
            <Link href="/bao-gia" className="flex items-center justify-center gap-2">
              <span>Đăng Ký Tham Quan Bếp Ăn</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
