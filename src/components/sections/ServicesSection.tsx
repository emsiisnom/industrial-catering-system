import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, Building2, GraduationCap, PartyPopper, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Factory,
    title: "Suất Ăn Công Nghiệp",
    description:
      "Cung cấp suất ăn số lượng lớn cho nhà máy, khu công nghiệp với thực đơn đa dạng, đảm bảo dinh dưỡng cho người lao động.",
    href: "/dich-vu#cong-nghiep",
  },
  {
    icon: Building2,
    title: "Suất Ăn Văn Phòng",
    description:
      "Thực đơn tinh tế, phong phú dành cho nhân viên văn phòng. Giao tận nơi, đúng giờ với bao bì chuyên nghiệp.",
    href: "/dich-vu#van-phong",
  },
  {
    icon: GraduationCap,
    title: "Suất Ăn Trường Học",
    description:
      "Chế độ dinh dưỡng cân bằng, an toàn cho học sinh các cấp. Thực đơn được chuyên gia dinh dưỡng tư vấn.",
    href: "/dich-vu#truong-hoc",
  },
  {
    icon: PartyPopper,
    title: "Tiệc & Sự Kiện",
    description:
      "Dịch vụ tiệc buffet, tea break, tiệc công ty với thực đơn phong phú và trang trí chuyên nghiệp.",
    href: "/dich-vu#tiec-su-kien",
  },
]

export function ServicesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent-500 uppercase tracking-wider mb-2 sm:mb-3">
            Dịch vụ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Chúng tôi cung cấp đa dạng giải pháp suất ăn phù hợp với mọi nhu cầu của doanh nghiệp
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative border-gray-100 hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <CardContent className="p-5 sm:p-6 pt-6 sm:pt-8 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary-50 text-primary-600 mb-4 sm:mb-5 group-hover:bg-primary-100 transition-colors">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors group/link pt-2"
                >
                  <span>Xem chi tiết</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

