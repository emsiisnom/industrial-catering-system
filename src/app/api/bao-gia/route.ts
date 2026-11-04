import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { QuoteFormSchema } from '@/lib/validations'
import { sendQuoteNotification } from '@/lib/resend'
import { saveFormSubmission } from '@/lib/payload-utils'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate body
    const validatedData = QuoteFormSchema.parse(body)

    // Lưu vào database CMS để hiển thị trong Admin Dashboard cho Sales quản lý
    try {
      await saveFormSubmission({
        type: 'quote',
        companyName: validatedData.companyName,
        contactPerson: validatedData.contactPerson,
        email: validatedData.email,
        phone: validatedData.phone,
        data: validatedData as unknown as Record<string, unknown>,
      })
    } catch (dbErr) {
      console.error('Lỗi khi lưu báo giá vào CMS:', dbErr)
    }

    // Send email notification via Resend
    try {
      await sendQuoteNotification({
        companyName: validatedData.companyName,
        contactPerson: validatedData.contactPerson,
        phone: validatedData.phone,
        email: validatedData.email,
        mealCount: validatedData.mealCount,
        mealType: validatedData.mealType,
        startDate: validatedData.startDate,
        duration: validatedData.duration,
        requirements: validatedData.requirements || '',
        address: validatedData.address,
      })
    } catch (emailErr) {
      console.error('Lỗi khi gửi email thông báo Resend:', emailErr)
      // Không throw error nếu email fail, vẫn trả về success để khách không bị gián đoạn
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Yêu cầu báo giá đã được ghi nhận thành công!',
        data: validatedData,
      },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.error('API /api/bao-gia error:', error)
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {}
      for (const issue of error.issues) {
        const path = issue.path[0]
        if (path && typeof path === 'string' && !fieldErrors[path]) {
          fieldErrors[path] = issue.message
        }
      }
      return NextResponse.json(
        {
          success: false,
          error: error.issues[0]?.message || 'Dữ liệu gửi lên không hợp lệ',
          fieldErrors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Có lỗi xảy ra trong quá trình xử lý yêu cầu' },
      { status: 500 }
    )
  }
}
