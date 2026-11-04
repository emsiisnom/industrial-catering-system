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

interface ContactNotifyEmailProps {
  data: {
    name: string
    email: string
    phone: string
    subject: string
    message: string
  }
}

export default function ContactNotifyEmail({ data }: ContactNotifyEmailProps) {
  const adminUrl = `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/admin/collections/form-submissions`

  return (
    <Html>
      <Head />
      <Preview>
        Liên hệ mới từ {data.name} - {data.subject}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>✉️ Liên hệ mới từ website</Heading>

          <Text style={text}>
            Bạn nhận được một tin nhắn liên hệ mới từ website. Vui lòng xem chi
            tiết bên dưới.
          </Text>

          <Hr style={hr} />

          <Section>
            <Heading as="h2" style={h2}>
              Thông tin người gửi
            </Heading>

            <Text style={label}>Họ tên:</Text>
            <Text style={value}>{data.name}</Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>{data.email}</Text>

            <Text style={label}>Số điện thoại:</Text>
            <Text style={value}>{data.phone}</Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Heading as="h2" style={h2}>
              Nội dung
            </Heading>

            <Text style={label}>Tiêu đề:</Text>
            <Text style={value}>{data.subject}</Text>

            <Text style={label}>Nội dung tin nhắn:</Text>
            <Text style={messageStyle}>{data.message}</Text>
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

const messageStyle = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '0 0 8px',
  padding: '12px 40px',
  backgroundColor: '#f9fafb',
  borderLeft: '3px solid #166534',
  whiteSpace: 'pre-wrap' as const,
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
