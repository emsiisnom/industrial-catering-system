import { z } from 'zod'

/**
 * Regex kiểm tra số điện thoại di động hợp lệ tại Việt Nam:
 * Bắt đầu bằng 03, 05, 07, 08, 09 hoặc +84 và theo sau là 8 chữ số (tổng 10 số).
 */
export const VIETNAMESE_PHONE_REGEX = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/

/**
 * Số ngày tối thiểu cần chuẩn bị trước khi bắt đầu phục vụ suất ăn công nghiệp (Logistics, nguồn nguyên liệu, nhân sự)
 */
export const MIN_PREPARATION_DAYS = 3

/**
 * Hàm tính ngày tối thiểu được phép chọn để bắt đầu phục vụ (hôm nay + 3 ngày)
 */
export function getMinServiceStartDate(): Date {
  const d = new Date()
  d.setDate(d.getDate() + MIN_PREPARATION_DAYS)
  d.setHours(0, 0, 0, 0)
  return d
}

export const QuoteFormSchema = z.object({
  companyName: z
    .string({ required_error: 'Vui lòng nhập tên doanh nghiệp / nhà máy' })
    .trim()
    .min(3, 'Tên doanh nghiệp phải có ít nhất 3 ký tự')
    .max(200, 'Tên doanh nghiệp không được vượt quá 200 ký tự'),

  contactPerson: z
    .string({ required_error: 'Vui lòng nhập tên người đại diện liên hệ' })
    .trim()
    .min(2, 'Tên người liên hệ phải có ít nhất 2 ký tự')
    .max(100, 'Tên người liên hệ không được vượt quá 100 ký tự')
    .refine((val) => !/\d/.test(val), 'Họ tên người liên hệ không được chứa chữ số')
    .refine(
      (val) => /^[a-zA-ZÀ-ỹ\s().-]+$/u.test(val),
      'Họ tên người liên hệ chỉ được chứa chữ cái tiếng Việt hoặc tiếng Anh'
    ),

  phone: z
    .string({ required_error: 'Vui lòng nhập số điện thoại' })
    .trim()
    .transform((val) => val.replace(/[\s.-]/g, ''))
    .refine(
      (val) => VIETNAMESE_PHONE_REGEX.test(val),
      'Số điện thoại không hợp lệ (Phải là số di động 10 số tại VN, VD: 0912345678)'
    ),

  email: z
    .string({ required_error: 'Vui lòng nhập email công việc' })
    .trim()
    .email('Địa chỉ email không đúng định dạng (VD: contact@doanhnghiep.vn)'),

  mealCount: z
    .number({ invalid_type_error: 'Vui lòng nhập số lượng suất ăn' })
    .int('Số suất ăn phải là số nguyên')
    .min(50, 'Quy mô tối thiểu nhận phục vụ là 50 suất/ngày')
    .max(50000, 'Số lượng tối đa phục vụ là 50.000 suất/ngày'),

  mealType: z.enum(['bua-sang', 'bua-trua', 'bua-toi', 'bua-dem', 'tron-goi'], {
    errorMap: () => ({ message: 'Vui lòng chọn hình thức / ca phục vụ bữa ăn' }),
  }),

  startDate: z
    .string({ required_error: 'Vui lòng chọn ngày bắt đầu phục vụ' })
    .min(1, 'Vui lòng chọn ngày bắt đầu phục vụ')
    .refine((val) => {
      const selected = new Date(val)
      selected.setHours(0, 0, 0, 0)
      const minDate = getMinServiceStartDate()
      return !isNaN(selected.getTime()) && selected >= minDate
    }, `Thời gian bắt đầu phục vụ cần đặt trước tối thiểu ${MIN_PREPARATION_DAYS} ngày để bếp ăn khảo sát, chuẩn bị nguồn nguyên liệu và quy trình logistics`),

  duration: z
    .string({ required_error: 'Vui lòng chọn thời hạn hợp đồng dự kiến' })
    .min(1, 'Vui lòng chọn thời hạn hợp đồng dự kiến'),

  requirements: z
    .string()
    .max(2000, 'Yêu cầu không được vượt quá 2000 ký tự')
    .optional()
    .default(''),

  address: z
    .string({ required_error: 'Vui lòng nhập địa chỉ nhận suất ăn' })
    .trim()
    .min(10, 'Địa chỉ cần chi tiết (ít nhất 10 ký tự, gồm KCN/Phường/Quận/Tỉnh)'),
})

export type QuoteFormData = z.infer<typeof QuoteFormSchema>

export const ContactFormSchema = z.object({
  name: z
    .string({ required_error: 'Vui lòng nhập họ và tên' })
    .trim()
    .min(2, 'Họ tên phải có ít nhất 2 ký tự')
    .max(100, 'Họ tên không được vượt quá 100 ký tự')
    .refine((val) => !/\d/.test(val), 'Họ và tên không được chứa chữ số')
    .refine(
      (val) => /^[a-zA-ZÀ-ỹ\s().-]+$/u.test(val),
      'Họ và tên chỉ được chứa chữ cái tiếng Việt hoặc tiếng Anh'
    ),

  email: z
    .string({ required_error: 'Vui lòng nhập email' })
    .trim()
    .email('Địa chỉ email không đúng định dạng (VD: name@company.com)'),

  phone: z
    .string({ required_error: 'Vui lòng nhập số điện thoại' })
    .trim()
    .transform((val) => val.replace(/[\s.-]/g, ''))
    .refine(
      (val) => VIETNAMESE_PHONE_REGEX.test(val),
      'Số điện thoại không hợp lệ (Phải là số 10 số tại VN, VD: 0912345678)'
    ),

  subject: z
    .string({ required_error: 'Vui lòng nhập tiêu đề' })
    .trim()
    .min(5, 'Tiêu đề phải có ít nhất 5 ký tự')
    .max(200, 'Tiêu đề không được quá 200 ký tự'),

  message: z
    .string({ required_error: 'Vui lòng nhập nội dung tin nhắn' })
    .trim()
    .min(10, 'Nội dung tin nhắn phải có ít nhất 10 ký tự')
    .max(5000, 'Nội dung không được quá 5000 ký tự'),
})

export type ContactFormData = z.infer<typeof ContactFormSchema>

export const MEAL_TYPE_LABELS: Record<string, string> = {
  'bua-sang': 'Bữa sáng',
  'bua-trua': 'Bữa trưa',
  'bua-toi': 'Bữa tối',
  'bua-dem': 'Bữa đêm (ca đêm)',
  'tron-goi': 'Trọn gói (nhiều ca)',
}
