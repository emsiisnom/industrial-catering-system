import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface QuoteRequestEmailProps {
  data: {
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
}

const MEAL_TYPE_LABELS: Record<string, string> = {
  'bua-sang': 'Bữa sáng',
  'bua-trua': 'Bữa trưa',
  'bua-toi': 'Bữa tối',
  'bua-dem': 'Bữa đêm (ca đêm)',
  'tron-goi': 'Trọn gói (nhiều bữa)',
}

export default function QuoteRequestEmail({ data }: QuoteRequestEmailProps) {
  const adminUrl = `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/admin/collections/form-submissions`

  return (
    <Html>
      <Head />
      <Preview>
        {`Yêu cầu báo giá mới từ ${data.companyName} - ${data.mealCount} suất/ngày`}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>📋 Yêu cầu báo giá mới</Heading>

          <Text style={text}>
            Bạn nhận được yêu cầu báo giá mới từ website. Vui lòng xem chi tiết
            bên dưới và liên hệ khách hàng sớm nhất có thể.
          </Text>

          <Hr style={hr} />

          <Section>
            <Heading as="h2" style={h2}>
              Thông tin khách hàng
            </Heading>

            <Text style={label}>Công ty:</Text>
            <Text style={value}>{data.companyName}</Text>

            <Text style={label}>Người liên hệ:</Text>
            <Text style={value}>{data.contactPerson}</Text>

            <Text style={label}>Số điện thoại:</Text>
            <Text style={value}>{data.phone}</Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>{data.email}</Text>

            <Text style={label}>Địa chỉ:</Text>
            <Text style={value}>{data.address}</Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Heading as="h2" style={h2}>
              Chi tiết yêu cầu
            </Heading>

            <Text style={label}>Số suất ăn/ngày:</Text>
            <Text style={highlightValue}>
              {data.mealCount.toLocaleString('vi-VN')} suất
            </Text>

            <Text style={label}>Loại bữa ăn:</Text>
            <Text style={value}>
              {MEAL_TYPE_LABELS[data.mealType] || data.mealType}
            </Text>

            <Text style={label}>Ngày bắt đầu dự kiến:</Text>
            <Text style={value}>{data.startDate}</Text>

            <Text style={label}>Thời gian hợp đồng:</Text>
            <Text style={value}>{data.duration}</Text>

            {data.requirements && (
              <>
                <Text style={label}>Yêu cầu đặc biệt:</Text>
                <Text style={value}>{data.requirements}</Text>
              </>
            )}
          </Section>

          <Hr style={hr} />

          <Section style={ctaSection}>
            <Link href={adminUrl} style={button}>
              Xem trong hệ thống quản trị
            </Link>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Email này được gửi tự động từ hệ thống website Suất Ăn Công Nghiệp.
            Vui lòng không trả lời email này.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
}

const h1 = {
  color: '#166534',
  fontSize: '24px',
  fontWeight: '700' as const,
  margin: '30px 0 15px',
  padding: '0 40px',
}

const h2 = {
  color: '#333',
  fontSize: '18px',
  fontWeight: '600' as const,
  margin: '20px 0 10px',
  padding: '0 40px',
}

const text = {
  color: '#555',
  fontSize: '14px',
  lineHeight: '24px',
  padding: '0 40px',
}

const label = {
  color: '#888',
  fontSize: '12px',
  fontWeight: '600' as const,
  textTransform: 'uppercase' as const,
  margin: '12px 0 2px',
  padding: '0 40px',
}

const value = {
  color: '#333',
  fontSize: '15px',
  fontWeight: '500' as const,
  margin: '0 0 8px',
  padding: '0 40px',
}

const highlightValue = {
  ...value,
  color: '#166534',
  fontSize: '18px',
  fontWeight: '700' as const,
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}

const ctaSection = {
  textAlign: 'center' as const,
  padding: '10px 40px',
}

const button = {
  backgroundColor: '#166534',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '14px',
  fontWeight: '600' as const,
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
}

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 40px',
}
