import { Resend } from 'resend'
import QuoteRequestEmail from '@/emails/QuoteRequestEmail'
import ContactNotifyEmail from '@/emails/ContactNotifyEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@suatancn.com'
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'sales@suatancn.com'

interface QuoteData {
  companyName: string
  contactPerson: string
  phone: string
  email: string
  mealCount: number
  mealType: string
  startDate: string
  duration: string
  requirements: string
  address: string
}

interface ContactData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export async function sendQuoteNotification(data: QuoteData): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [NOTIFICATION_EMAIL],
      subject: `[Yêu cầu báo giá] ${data.companyName} - ${data.mealCount} suất/ngày`,
      react: QuoteRequestEmail({ data }),
    })

    if (error) {
      console.error('Lỗi gửi email báo giá:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    console.error('Lỗi gửi email báo giá:', err)
    return { success: false, error: 'Không thể gửi email thông báo' }
  }
}

export async function sendContactNotification(data: ContactData): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [NOTIFICATION_EMAIL],
      subject: `[Liên hệ] ${data.subject} - ${data.name}`,
      react: ContactNotifyEmail({ data }),
    })

    if (error) {
      console.error('Lỗi gửi email liên hệ:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    console.error('Lỗi gửi email liên hệ:', err)
    return { success: false, error: 'Không thể gửi email thông báo' }
  }
}
