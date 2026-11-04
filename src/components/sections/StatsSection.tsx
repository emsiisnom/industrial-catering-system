const stats = [
  { value: "10,000+", label: "Suất ăn/ngày" },
  { value: "200+", label: "Khách hàng" },
  { value: "15+", label: "Năm kinh nghiệm" },
  { value: "99%", label: "Tỉ lệ hài lòng" },
]

export function StatsSection() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-base text-primary-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

