'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react'
import { ContactFormSchema } from '@/lib/validations'
import { z } from 'zod'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev }
        delete updated[name]
        return updated
      })
    }
  }

  // Tự động chặn nhập số ở ô Họ và tên
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanValue = e.target.value.replace(/\d/g, '')
    setFormData((prev) => ({ ...prev, name: cleanValue }))

    if (fieldErrors.name) {
      setFieldErrors((prev) => {
        const updated = { ...prev }
        delete updated.name
        return updated
      })
    }
  }

  const handleBlur = (field: string) => {
    try {
      ContactFormSchema.pick({ [field]: true } as any).parse(formData)
      if (fieldErrors[field]) {
        setFieldErrors((prev) => {
          const updated = { ...prev }
          delete updated[field]
          return updated
        })
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const issue = err.issues[0]
        if (issue) {
          setFieldErrors((prev) => ({ ...prev, [field]: issue.message }))
        }
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFieldErrors({})
    setErrorMessage('')

    const validationResult = ContactFormSchema.safeParse(formData)
    if (!validationResult.success) {
      const errors: Record<string, string> = {}
      for (const issue of validationResult.error.issues) {
        const path = issue.path[0]
        if (path && typeof path === 'string' && !errors[path]) {
          errors[path] = issue.message
        }
      }
      setFieldErrors(errors)
      setStatus('error')
      setErrorMessage('Vui lòng kiểm tra lại các trường thông tin bị lỗi bên dưới!')
      return
    }

    setLoading(true)
    setStatus('idle')

    try {
      const res = await fetch('/api/lien-he', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validationResult.data),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Có lỗi xảy ra khi gửi tin nhắn.')
      }

      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      if (err instanceof Error) {
        setErrorMessage(err.message)
      } else {
        setErrorMessage('Không thể gửi tin nhắn. Vui lòng kiểm tra lại kết nối mạng!')
      }
    } finally {
      setLoading(false)
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-2">Đã Nhận Thông Tin Liên Hệ!</h4>
        <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto">
          Cảm ơn bạn đã liên hệ với chúng tôi. Ban phụ trách dịch vụ khách hàng sẽ phản hồi trong vòng 2 giờ làm việc.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setStatus('idle')
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
            setFieldErrors({})
          }}
          className="border-green-600 text-green-700 cursor-pointer"
        >
          Gửi tin nhắn khác
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {status === 'error' && errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-sm animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="c-name" className="font-semibold text-gray-800">
            Họ và tên của bạn <span className="text-red-500">*</span>
          </Label>
          <Input
            id="c-name"
            name="name"
            placeholder="Nguyễn Văn A"
            value={formData.name}
            onChange={handleNameChange}
            onBlur={() => handleBlur('name')}
            className={fieldErrors.name ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : ''}
          />
          {fieldErrors.name && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {fieldErrors.name}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="c-phone" className="font-semibold text-gray-800">
            Số điện thoại liên hệ <span className="text-red-500">*</span>
          </Label>
          <Input
            id="c-phone"
            name="phone"
            type="tel"
            placeholder="0912 345 678"
            value={formData.phone}
            onChange={handleChange}
            onBlur={() => handleBlur('phone')}
            className={fieldErrors.phone ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : ''}
          />
          {fieldErrors.phone && (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {fieldErrors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="c-email" className="font-semibold text-gray-800">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="c-email"
          name="email"
          type="email"
          placeholder="example@congty.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
          className={fieldErrors.email ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : ''}
        />
        {fieldErrors.email && (
          <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="c-subject" className="font-semibold text-gray-800">
          Tiêu đề yêu cầu <span className="text-red-500">*</span>
        </Label>
        <Input
          id="c-subject"
          name="subject"
          placeholder="VD: Cần tư vấn suất ăn văn phòng 150 người tại KCN Tân Bình"
          value={formData.subject}
          onChange={handleChange}
          onBlur={() => handleBlur('subject')}
          className={fieldErrors.subject ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : ''}
        />
        {fieldErrors.subject && (
          <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {fieldErrors.subject}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="c-message" className="font-semibold text-gray-800">
          Nội dung chi tiết <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="c-message"
          name="message"
          rows={5}
          placeholder="Mô tả cụ thể yêu cầu của bạn, thời gian mong muốn khảo sát hoặc các thắc mắc liên quan..."
          value={formData.message}
          onChange={handleChange}
          onBlur={() => handleBlur('message')}
          className={fieldErrors.message ? 'border-red-500 focus:ring-red-200 focus:border-red-500' : ''}
        />
        {fieldErrors.message && (
          <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {fieldErrors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 sm:py-4 px-4 text-sm sm:text-base cursor-pointer flex items-center justify-center gap-2 transition-all hover:shadow-lg min-h-[46px]"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin shrink-0" />
            <span>Đang gửi tin nhắn...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 shrink-0" />
            <span>Gửi Tin Nhắn Cho Chúng Tôi</span>
          </>
        )}
      </Button>
    </form>
  )
}
