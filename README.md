# Hệ Thống Suất Ăn Công Nghiệp (Industrial Catering System)

Website giới thiệu dịch vụ và hệ thống CMS quản trị thực đơn, tin tức, yêu cầu báo giá chuyên biệt cho doanh nghiệp cung cấp suất ăn công nghiệp B2B.

---

## 🚀 Công Nghệ Sử Dụng

- **Frontend:** Next.js 15 (App Router), React 19, Tailwind CSS, Lucide React, Radix UI.
- **Backend & CMS:** Payload CMS v3 (Next.js native integration).
- **Cơ Sở Dữ Liệu:** PostgreSQL (Hosted trên Supabase Cloud).
- **Email Thông Báo:** Resend API.
- **Ngôn ngữ:** TypeScript.

---

## ✨ Tính Năng Nổi Bật

1. **Quản trị Thực đơn Tuần linh hoạt:**
   - Hỗ trợ đổi món từ Thứ 2 đến Thứ 7 theo từng ca.
   - Định mức Calo khoa học, phân loại món chính, món phụ, món canh, tráng miệng.
   - Tải ảnh chụp khay cơm thực tế mỗi ngày.
   - **Interactive Menu Switcher:** Hỗ trợ áp dụng đồng thời nhiều phân khúc thực đơn (Tiêu chuẩn 30k–35k, Cao cấp chuyên gia 50k–65k...).

2. **Hệ thống Tin tức & Kiến thức Dinh dưỡng:**
   - Trình soạn thảo Lexical chuẩn hóa font tiếng Việt.
   - Tối ưu SEO Onpage (Meta title, description, OG image, sitemap tự động).
   - Hiển thị hình ảnh dạng khay cơm không bị cắt viền.

3. **Tiếp nhận & Xử lý Báo giá B2B:**
   - Form khảo sát quy mô suất ăn, ngân sách dự kiến, yêu cầu bếp ăn một chiều.
   - Tự động lưu trữ thông tin khách hàng vào CMS và gửi email thông báo.

4. **Tối ưu Hiển thị Đa Thiết Bị:**
   - Giao diện chuẩn Responsive cho máy tính, máy tính bảng và điện thoại di động.

---

## 🛠️ Hướng Dẫn Cài Đặt & Chạy Cục Bộ

### 1. Chuẩn bị
- Đảm bảo đã cài đặt **Node.js** (Khuyến nghị phiên bản LTS v20 hoặc v22).
- Tạo file `.env.local` ở thư mục gốc (tham khảo mẫu tại `.env.example`) và điền các khóa kết nối.

### 2. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 3. Khởi động môi trường phát triển (Dev Server)
```bash
npm run dev
```

Sau khi khởi động:
- **Giao diện Website:** [http://localhost:3000](http://localhost:3000)
- **Trang Quản trị Payload CMS:** [http://localhost:3000/admin](http://localhost:3000/admin)

---

## 📂 Cấu Trúc Dự Án

```
├── public/                 # Ảnh tĩnh, icon và file robots.txt
├── media/                  # Thư mục lưu trữ ảnh tải lên từ CMS
├── src/
│   ├── app/
│   │   ├── (frontend)/     # Các trang giao diện người dùng (Trang chủ, Thực đơn, Dịch vụ...)
│   │   ├── (payload)/      # Trang quản trị Payload CMS (/admin)
│   │   └── api/            # Route handlers cho API báo giá, liên hệ
│   ├── components/         # UI components, layout, sections, menu viewer
│   ├── payload/            # Collections (WeeklyMenus, Posts, Media, Users...)
│   └── lib/                # Payload utils, database helpers
└── package.json
```
