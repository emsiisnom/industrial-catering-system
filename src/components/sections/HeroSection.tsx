import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-500 blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary-400 blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3.5 py-1.5 text-xs sm:text-sm font-medium text-primary-100 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
            Đối tác hàng đầu về suất ăn công nghiệp
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5 sm:mb-6">
            Đối Tác Tin Cậy Cho{" "}
            <span className="text-accent-400">Suất Ăn Công Nghiệp</span>{" "}
            Chất Lượng Cao
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-primary-100 leading-relaxed mb-6 sm:mb-8 max-w-2xl">
            Hơn 15 năm kinh nghiệm cung cấp suất ăn công nghiệp cho hàng trăm doanh nghiệp. Cam kết chất lượng, vệ sinh, đúng giờ với mức giá cạnh tranh nhất.
          </p>

          {/* Key selling points */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8 sm:mb-10 text-xs sm:text-sm text-primary-100">
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-400 shrink-0" />
              10,000+ suất ăn/ngày
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-400 shrink-0" />
              Chứng nhận ISO 22000
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-400 shrink-0" />
              Giao hàng đúng giờ 99%
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button variant="accent" size="lg" className="w-full sm:w-auto font-bold shadow-lg shadow-orange-500/25 cursor-pointer min-h-[46px]" asChild>
              <Link href="/bao-gia" className="flex items-center justify-center gap-2">
                <span>Nhận Báo Giá Miễn Phí</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white cursor-pointer min-h-[46px]"
              asChild
            >
              <Link href="/gioi-thieu" className="flex items-center justify-center">Tìm Hiểu Thêm</Link>
            </Button>
          </div>
        </div>

        {/* Right side decorative food image placeholder */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-96 h-96">
          <div className="relative w-full h-full rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <div className="text-center text-primary-200 text-sm">
              <div className="w-48 h-48 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-3">
                <span className="text-5xl">🍱</span>
              </div>
              <p>Hình ảnh suất ăn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

