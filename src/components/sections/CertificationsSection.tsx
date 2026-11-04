import React from 'react'
import { ShieldCheck, Award, FileCheck, CheckCircle2 } from 'lucide-react'

const certifications = [
  {
    icon: Award,
    title: 'ISO 22000:2018',
    org: 'Tổ chức Tiêu chuẩn hóa Quốc tế',
    desc: 'Hệ thống quản lý an toàn thực phẩm đạt tiêu chuẩn quốc tế cho toàn bộ chuỗi cung ứng bếp ăn công nghiệp.',
    code: 'Cert No: FSMS-22000-VN',
  },
  {
    icon: ShieldCheck,
    title: 'HACCP Codex 2020',
    org: 'Hệ thống phân tích mối nguy & điểm kiểm soát tới hạn',
    desc: 'Kiểm soát chặt chẽ 100% mối nguy sinh học, hóa học và vật lý từ khâu nhập nguyên liệu đến thành phẩm.',
    code: 'Codex Alimentarius',
  },
  {
    icon: FileCheck,
    title: 'Giấy Chứng Nhận VSATTP',
    org: 'Chi cục An toàn Vệ sinh Thực phẩm',
    desc: 'Cấp chứng nhận đủ điều kiện an toàn thực phẩm cho bếp nấu công suất lớn phục vụ trên 10.000 suất/ngày.',
    code: 'Số: 456/2024/ATTP-ĐK',
  },
  {
    icon: CheckCircle2,
    title: 'Bảo Hiểm Trách Nhiệm Sản Phẩm',
    org: 'Bảo hiểm Quân Đội (MIC)',
    desc: 'Bảo hiểm trách nhiệm chất lượng món ăn và an toàn thực phẩm với hạn mức bồi thường lên đến 20 tỷ đồng.',
    code: 'HĐ Bảo hiểm MIC-CATERING',
  },
]

export function CertificationsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-green-700 font-semibold text-xs uppercase tracking-wider bg-green-50 border border-green-200 px-3 py-1 rounded-full">
            Chuẩn Mực & Cam Kết
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Chứng Nhận & Tiêu Chuẩn Vệ Sinh An Toàn Thực Phẩm
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600">
            Mọi quy trình từ nhập nguyên liệu, chế biến, chia khay đến vận chuyển đều tuân thủ các quy chuẩn khắt khe nhất của Bộ Y Tế và Quốc Tế.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50/50 to-white hover:border-green-600 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-700 group-hover:bg-green-700 group-hover:text-white transition-colors mb-4 sm:mb-5">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{cert.title}</h3>
                <div className="text-xs font-semibold text-green-700 mb-2 sm:mb-3">{cert.org}</div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">{cert.desc}</p>
                <div className="text-xs text-gray-400 font-mono bg-gray-100 px-2 py-1 rounded inline-block">
                  {cert.code}
                </div>
              </div>
            )
          })}
        </div>

        {/* Audit Process Highlights */}
        <div className="mt-10 sm:mt-12 bg-green-900 text-white rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Quy Trình Kiểm Tra 3 Bước</h3>
              <p className="text-green-200 text-xs sm:text-sm leading-relaxed">
                Chúng tôi sẵn sàng đón tiếp ban lãnh đạo & đoàn kiểm tra của doanh nghiệp đến tham quan thực tế bếp ăn bất kỳ thời điểm nào.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-green-800/60 p-4 rounded-xl border border-green-700/50">
                <div className="text-green-400 font-bold text-base sm:text-lg mb-1">01. Nhập liệu 4h00</div>
                <p className="text-xs text-green-100">Kiểm tra tem nhãn VietGAP, test nhanh dư lượng và nhiệt độ thực phẩm tươi.</p>
              </div>
              <div className="bg-green-800/60 p-4 rounded-xl border border-green-700/50">
                <div className="text-green-400 font-bold text-base sm:text-lg mb-1">02. Nấu & Lưu Mẫu</div>
                <p className="text-xs text-green-100">Bếp một chiều khép kín, lưu mẫu thức ăn 24h trong tủ chuyên dụng có niêm phong.</p>
              </div>
              <div className="bg-green-800/60 p-4 rounded-xl border border-green-700/50">
                <div className="text-green-400 font-bold text-base sm:text-lg mb-1">03. Giao Giữ Nhiệt</div>
                <p className="text-xs text-green-100">Thùng giữ nhiệt inox và xe chuyên dụng, đảm bảo cơm canh trên 65°C khi đến nơi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
