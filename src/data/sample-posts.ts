export interface SamplePost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  readTime: string
  imageUrl?: string | null
  content?: any
}

export const samplePosts: SamplePost[] = [
  {
    slug: 'tieu-chuan-bep-an-mot-chieu-trong-nha-may',
    title: 'Tiêu Chuẩn Bếp Ăn Một Chiều Trong Nhà Máy Công Nghiệp: Quy Định & Cách Vận Hành',
    excerpt:
      'Tìm hiểu chi tiết nguyên tắc vận hành bếp ăn một chiều từ khâu nhập nguyên liệu, sơ chế, chế biến đến khâu phục vụ và rửa dọn nhằm triệt tiêu nguy cơ nhiễm khuẩn chéo.',
    category: 'Tiêu chuẩn & Pháp lý',
    date: '15/10/2024',
    author: 'Ks. Nguyễn Thành Long',
    readTime: '6 phút đọc',
  },
  {
    slug: 'bang-tieu-chuan-calo-bua-an-ca-cho-cong-nhan',
    title: 'Bảng Tiêu Chuẩn Năng Lượng & Calo Bữa Ăn Ca Cho Công Nhân Theo Từng Ngành Nghề',
    excerpt:
      'Mỗi nhóm ngành sản xuất nặng nhọc như cơ khí, luyện kim đòi hỏi lượng calo khác biệt so với may mặc, vi điện tử. Hướng dẫn tính toán khẩu phần chuẩn từ chuyên gia dinh dưỡng.',
    category: 'Dinh dưỡng lao động',
    date: '08/10/2024',
    author: 'Bác sĩ Dinh dưỡng Lê Thu Trang',
    readTime: '8 phút đọc',
  },
  {
    slug: 'kinh-nghiem-lua-chon-nha-cung-cap-suat-an-cong-nghiep',
    title: '5 Tiêu Chí Sống Còn Khi Lựa Chọn Nhà Cung Cấp Suất Ăn Công Nghiệp Cho Doanh Nghiệp FDI',
    excerpt:
      'Ban nhân sự và mua hàng (Procurement) cần kiểm tra những chứng chỉ gì? Kinh nghiệm đi audit thực tế cơ sở bếp nấu và đàm phán hợp đồng cung cấp dịch vụ ăn uống.',
    category: 'Cẩm nang doanh nghiệp',
    date: '28/09/2024',
    author: 'Ban Biên Tập B2B',
    readTime: '7 phút đọc',
  },
  {
    slug: 'quy-trinh-luu-mau-thuc-an-24h-theo-bo-y-te',
    title: 'Hướng Dẫn Quy Trình Lưu Mẫu Thức Ăn 24 Giờ Đúng Chuẩn Bộ Y Tế Ban Hành',
    excerpt:
      'Quy định về dụng cụ lưu mẫu, khối lượng mẫu tối thiểu, nhiệt độ tủ lưu và biểu mẫu ghi chép niêm phong nhằm đảm bảo tính pháp lý khi có đoàn thanh tra an toàn thực phẩm.',
    category: 'An toàn thực phẩm',
    date: '19/09/2024',
    author: 'Trưởng ban QA/QC',
    readTime: '5 phút đọc',
  },
  {
    slug: 'phong-ngua-ngo-doc-thuc-pham-mua-nang-nong',
    title: 'Giải Pháp Chống Ô Thiu & Đảm Bảo Độ Tươi Ngon Của Suất Ăn Trong Mùa Nắng Nóng',
    excerpt:
      'Nhiệt độ ngoài trời trên 38°C là thách thức lớn đối với việc vận chuyển cơm ca. Khám phá giải pháp công nghệ xe giữ nhiệt và quy trình kiểm soát thời gian vàng 2 giờ.',
    category: 'Kỹ thuật vận hành',
    date: '02/09/2024',
    author: 'Ks. Trần Minh Hải',
    readTime: '5 phút đọc',
  },
  {
    slug: 'loi-ich-cua-viec-cai-thien-bua-an-ca-cong-nhan',
    title: 'Tăng 15% Năng Suất Lao Động Nhờ Nâng Cấp Chất Lượng Bữa Ăn Giữa Ca Cho Công Nhân',
    excerpt:
      'Nghiên cứu thực tế tại các KCN miền Bắc: Mối liên hệ chặt chẽ giữa bữa ăn đủ chất, tinh thần làm việc của người lao động và tỷ lệ giảm thiểu sai sót kỹ thuật trong dây chuyền.',
    category: 'Dinh dưỡng lao động',
    date: '20/08/2024',
    author: 'Ban Biên Tập B2B',
    readTime: '6 phút đọc',
  },
]
