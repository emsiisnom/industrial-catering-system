import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { FaqJsonLd } from '@/components/seo/JsonLd'
import { CTASection } from '@/components/sections/CTASection'
import { Button } from '@/components/ui/button'
import { HelpCircle, ChevronRight, PhoneCall } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Câu Hỏi Thường Gặp Về Dịch Vụ Suất Ăn Công Nghiệp (FAQ)',
  description:
    'Giải đáp tất cả thắc mắc về đơn giá, số lượng suất tối thiểu, quy trình ăn thử mẫu, chứng nhận VSATTP và phương thức thanh toán hợp đồng suất ăn.',
  alternates: {
    canonical: '/cau-hoi-thuong-gap',
  },
}

const faqs = [
  {
    question: 'Số lượng suất ăn tối thiểu mà quý công ty nhận cung cấp là bao nhiêu?',
    answer:
      'Đối với hình thức nấu tại bếp trung tâm và vận chuyển tận nơi bằng xe chuyên dụng giữ nhiệt, chúng tôi nhận phục vụ từ 50 suất/ngày trở lên. Đối với hình thức tiếp quản và vận hành trực tiếp bếp ăn tại chỗ của doanh nghiệp, quy mô tối thiểu khuyến nghị là từ 300 suất/ngày để tối ưu hóa chi phí vận hành nhân sự và trang thiết bị.',
  },
  {
    question: 'Doanh nghiệp có được ăn thử nghiệm suất ăn mẫu trước khi ký hợp đồng không?',
    answer:
      'Có. Chúng tôi cung cấp chương trình "Ăn thử trải nghiệm thực tế" hoàn toàn miễn phí từ 3 đến 5 ngày phục vụ tận nơi cho ban lãnh đạo và đại diện công đoàn doanh nghiệp nhằm đánh giá chính xác chất lượng món ăn, độ nóng sốt và cung cách phục vụ trước khi tiến hành ký kết hợp đồng chính thức.',
  },
  {
    question: 'Đơn giá một suất ăn công nghiệp hiện nay dao động trong khoảng bao nhiêu?',
    answer:
      'Đơn giá suất ăn công nghiệp hiện nay rất linh hoạt, dao động từ 25.000đ đến 45.000đ/suất đối với công nhân nhà máy, và từ 40.000đ đến 65.000đ/suất đối với văn phòng/chuyên gia. Mức giá đã bao gồm: Món chính, món xào, món canh, cơm trắng không giới hạn, tráng miệng, chi phí vận chuyển và hóa đơn VAT.',
  },
  {
    question: 'Quy trình kiểm soát an toàn vệ sinh thực phẩm (VSATTP) được thực hiện như thế nào?',
    answer:
      'Chúng tôi áp dụng hệ thống quản lý an toàn thực phẩm theo tiêu chuẩn quốc tế ISO 22000:2018 và HACCP Codex. Nguồn nguyên liệu 100% có hợp đồng với các hợp tác xã VietGAP uy tín. Mỗi ca nấu đều thực hiện nghiêm ngặt quy trình lưu mẫu thức ăn 24 giờ trong tủ chuyên dụng có niêm phong của cơ quan y tế.',
  },
  {
    question: 'Nếu xảy ra sự cố ngộ độc thực phẩm thì trách nhiệm thuộc về ai?',
    answer:
      'Chúng tôi cam kết chịu 100% trách nhiệm trước pháp luật và chi trả toàn bộ chi phí y tế nếu xảy ra sự cố từ nguồn thức ăn do chúng tôi cung cấp. Ngoài ra, chúng tôi đã mua gói Bảo hiểm trách nhiệm sản phẩm tại Công ty Bảo hiểm Quân Đội (MIC) với hạn mức bồi thường lên tới 20.000.000.000 VNĐ (Hai mươi tỷ đồng).',
  },
  {
    question: 'Thời gian giao cơm và nhiệt độ món ăn được đảm bảo ra sao?',
    answer:
      'Thức ăn sau khi ra lò sẽ được đóng vào các khay chia sẵn hoặc thùng giữ nhiệt inox 3 lớp, vận chuyển bằng đội xe tải chuyên dụng có khoang giữ nhiệt. Cơm và canh luôn được cam kết giao đến địa điểm của khách hàng trước giờ ăn 30 phút với nhiệt độ luôn đạt trên 65°C.',
  },
  {
    question: 'Thực đơn có bị lặp lại gây nhàm chán cho công nhân không?',
    answer:
      'Không. Bảng thực đơn được xây dựng theo chu kỳ 4 tuần liên tiếp hoàn toàn khác nhau với hơn 200 món ăn phong phú từ ba miền Bắc - Trung - Nam. Định kỳ hàng tháng, chúng tôi phối hợp với công đoàn khảo sát ý kiến công nhân để thay đổi những món ăn chưa phù hợp.',
  },
  {
    question: 'Phương thức thanh toán hợp đồng như thế nào?',
    answer:
      'Thông thường chúng tôi áp dụng phương thức thanh toán theo tuần, theo 2 tuần hoặc chốt công nợ vào ngày cuối tháng, thời hạn thanh toán sau 15 đến 30 ngày kể từ ngày xuất hóa đơn GTGT điện tử hợp lệ.',
  },
]

export default function FAQPage() {
  return (
    <div className="bg-white">
      <FaqJsonLd faqs={faqs} />

      {/* Header */}
      <div className="bg-gradient-to-b from-green-50/70 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <Breadcrumbs items={[{ label: 'Câu hỏi thường gặp' }]} />
          <div className="max-w-3xl mt-3 sm:mt-4">
            <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-100/80 px-3 py-1 rounded-full">
              Hỗ Trợ Khách Hàng
            </span>
            <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug md:leading-[1.25]">
              Giải Đáp Thắc Mắc Thường Gặp
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Tổng hợp những thắc mắc phổ biến nhất của các nhà quản lý nhân sự, bộ phận mua hàng khi tìm kiếm đối tác cung cấp suất ăn công nghiệp.
            </p>
          </div>
        </div>
      </div>

      {/* Accordion List */}
      <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-5 sm:p-8 rounded-2xl border border-gray-200 bg-white hover:border-green-600 transition-all shadow-sm"
            >
              <h3 className="text-base sm:text-xl font-bold text-gray-900 flex items-start gap-2.5 sm:gap-3">
                <span className="text-green-700 font-bold shrink-0">Q{index + 1}.</span>
                <span>{faq.question}</span>
              </h3>
              <div className="mt-3 sm:mt-4 pl-6 sm:pl-7 text-xs sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-3 sm:pt-4">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 p-8 bg-green-50 border border-green-200 rounded-2xl text-center">
          <HelpCircle className="w-12 h-12 text-green-700 mx-auto mb-3" />
          <h4 className="text-xl font-bold text-gray-900 mb-2">Bạn Vẫn Còn Câu Hỏi Khác?</h4>
          <p className="text-sm text-gray-600 max-w-lg mx-auto mb-6">
            Đừng ngần ngại gọi điện trực tiếp cho chuyên viên tư vấn của chúng tôi để được giải đáp cặn kẽ mọi yêu cầu riêng biệt của doanh nghiệp bạn.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="bg-green-700 hover:bg-green-800 text-white cursor-pointer">
              <a href="tel:0912345678" className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                <span>Gọi Hotline: 0912.345.678</span>
              </a>
            </Button>
            <Button asChild variant="outline" className="border-green-700 text-green-700">
              <Link href="/lien-he">Gửi câu hỏi qua form</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
