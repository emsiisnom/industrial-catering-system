import { Shield, Leaf, Clock, Utensils, BadgeDollarSign, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "An Toàn Vệ Sinh Thực Phẩm",
    description:
      "Đạt chứng nhận ISO 22000, HACCP. Quy trình sản xuất nghiêm ngặt từ khâu chọn nguyên liệu đến thành phẩm.",
  },
  {
    icon: Leaf,
    title: "Nguồn Nguyên Liệu Sạch",
    description:
      "Nguyên liệu được tuyển chọn từ các nhà cung cấp uy tín, có truy xuất nguồn gốc rõ ràng.",
  },
  {
    icon: Clock,
    title: "Giao Hàng Đúng Giờ",
    description:
      "Cam kết giao hàng đúng thời gian yêu cầu với tỷ lệ đúng giờ đạt 99%. Không để bữa ăn bị trễ.",
  },
  {
    icon: Utensils,
    title: "Thực Đơn Đa Dạng",
    description:
      "Thực đơn được thiết kế bởi chuyên gia dinh dưỡng, thay đổi hàng tuần, phù hợp khẩu vị vùng miền.",
  },
  {
    icon: BadgeDollarSign,
    title: "Giá Cả Cạnh Tranh",
    description:
      "Mức giá hợp lý nhất thị trường nhờ quy mô sản xuất lớn và tối ưu hóa chi phí vận hành.",
  },
  {
    icon: Users,
    title: "Đội Ngũ Chuyên Nghiệp",
    description:
      "Hơn 500 nhân viên được đào tạo bài bản, đầu bếp giàu kinh nghiệm, phục vụ tận tâm.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold text-accent-500 uppercase tracking-wider mb-2 sm:mb-3">
            Lý do chọn chúng tôi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Tại Sao Chọn Chúng Tôi?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Chúng tôi cam kết mang đến bữa ăn chất lượng nhất với dịch vụ chuyên nghiệp nhất
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary-100 text-primary-700 shrink-0">
                <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

