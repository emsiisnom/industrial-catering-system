import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle } from "lucide-react"

const serviceLinks = [
  { label: "Suất ăn công nghiệp", href: "/dich-vu#cong-nghiep" },
  { label: "Suất ăn văn phòng", href: "/dich-vu#van-phong" },
  { label: "Suất ăn trường học", href: "/dich-vu#truong-hoc" },
  { label: "Tiệc & sự kiện", href: "/dich-vu#tiec-su-kien" },
  { label: "Thực đơn tuần", href: "/thuc-don" },
]

const infoLinks = [
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Câu hỏi thường gặp", href: "/cau-hoi-thuong-gap" },
  { label: "Chính sách", href: "/chinh-sach" },
  { label: "Hình ảnh", href: "/hinh-anh" },
]

export function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Company info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-primary-700 font-bold text-lg">
                SA
              </div>
              <div>
                <span className="text-lg font-bold">
                  <span className="text-white">Suất Ăn</span>
                  <span className="text-accent-400">CN</span>
                </span>
              </div>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              Công ty chuyên cung cấp suất ăn công nghiệp chất lượng cao, đảm bảo vệ sinh an toàn thực phẩm cho doanh nghiệp, nhà máy, trường học trên toàn quốc.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-800 text-primary-200 hover:bg-primary-700 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-800 text-primary-200 hover:bg-primary-700 hover:text-white transition-colors"
                aria-label="Zalo"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400 mb-4">
              Dịch Vụ
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Information */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400 mb-4">
              Thông Tin
            </h3>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400 mb-4">
              Liên Hệ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent-400 shrink-0" />
                <span className="text-sm text-primary-200">
                  123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh
                </span>
              </li>
              <li>
                <a
                  href="tel:0912345678"
                  className="flex items-center gap-3 text-sm text-primary-200 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-accent-400 shrink-0" />
                  0912.345.678
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@suatancn.vn"
                  className="flex items-center gap-3 text-sm text-primary-200 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent-400 shrink-0" />
                  info@suatancn.vn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-accent-400 shrink-0" />
                <span className="text-sm text-primary-200">
                  Thứ 2 - Thứ 7: 7:00 - 17:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-300 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Suất Ăn Công Nghiệp. Tất cả quyền được bảo lưu.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/chinh-sach" className="hover:text-white transition-colors">
                Chính sách
              </Link>
              <Link href="/lien-he" className="hover:text-white transition-colors">
                Liên hệ
              </Link>
              <Link href="/bao-gia" className="hover:text-white transition-colors">
                Báo giá
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

