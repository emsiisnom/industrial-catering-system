import { NextRequest, NextResponse } from 'next/server'
import { ContactFormSchema } from '@/lib/validations'
import { sendContactNotification } from '@/lib/resend'
import { saveFormSubmission } from '@/lib/payload-utils'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate body
    const validatedData = ContactFormSchema.parse(body)

    // Lưu vào database CMS để quản lý trong Admin Dashboard
    try {
      await saveFormSubmission({
        type: 'contact',
        contactPerson: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        data: validatedData as unknown as Record<string, unknown>,
      })
    } catch (dbErr) {
      console.error('Lỗi khi lưu liên hệ vào CMS:', dbErr)
    }

    // Send email notification via Resend
    try {
      await sendContactNotification({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        subject: validatedData.subject,
        message: validatedData.message,
      })
    } catch (emailErr) {
      console.error('Lỗi khi gửi email thông báo liên hệ:', emailErr)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Tin nhắn liên hệ đã được gửi thành công!',
        data: validatedData,
      },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.error('API /api/lien-he error:', error)
    if (error && typeof error === 'object' && 'errors' in error) {
      return NextResponse.json(
        { success: false, error: 'Thông tin gửi không hợp lệ', details: error },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Không thể xử lý yêu cầu liên hệ lúc này' },
      { status: 500 }
    )
  }
}
