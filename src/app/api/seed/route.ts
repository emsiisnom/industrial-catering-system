import { NextResponse } from 'next/server'
import { getPayload } from '@/lib/payload-utils'
import { samplePosts } from '@/data/sample-posts'

// Helper tạo cấu trúc Lexical RichText node đơn giản
function createLexicalContent(text: string) {
  return {
    root: {
      type: 'root',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr',
      children: [
        {
          type: 'heading',
          tag: 'h2',
          format: '',
          indent: 0,
          version: 1,
          direction: 'ltr',
          children: [
            {
              type: 'text',
              text: 'Tổng quan & Tiêu chuẩn quy định',
              format: 1,
              detail: 0,
              mode: 'normal',
              style: '',
              version: 1,
            },
          ],
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          direction: 'ltr',
          children: [
            {
              type: 'text',
              text: text,
              format: 0,
              detail: 0,
              mode: 'normal',
              style: '',
              version: 1,
            },
          ],
        },
        {
          type: 'heading',
          tag: 'h2',
          format: '',
          indent: 0,
          version: 1,
          direction: 'ltr',
          children: [
            {
              type: 'text',
              text: 'Giải pháp áp dụng cho nhà máy',
              format: 1,
              detail: 0,
              mode: 'normal',
              style: '',
              version: 1,
            },
          ],
        },
        {
          type: 'paragraph',
          format: '',
          indent: 0,
          version: 1,
          direction: 'ltr',
          children: [
            {
              type: 'text',
              text: 'Chúng tôi cam kết vận hành bếp ăn theo đúng tiêu chuẩn một chiều, kiểm tra nguồn gốc VietGAP 100% và lưu mẫu 24h đầy đủ. Đội ngũ chuyên gia luôn sẵn sàng đồng hành cùng doanh nghiệp để nâng cao chất lượng bữa ăn ca.',
              format: 0,
              detail: 0,
              mode: 'normal',
              style: '',
              version: 1,
            },
          ],
        },
      ],
    },
  }
}

export async function GET() {
  return handleSeed()
}

export async function POST() {
  return handleSeed()
}

async function handleSeed() {
  try {
    const payload = await getPayload()

    // 1. Kiểm tra tài khoản admin để gán tác giả
    const users = await payload.find({
      collection: 'users',
      limit: 1,
    })
    const authorId = users.docs[0]?.id

    // 2. Khởi tạo bài viết mẫu nếu chưa có
    const existingPosts = await payload.find({
      collection: 'posts',
      limit: 1,
    })

    let seededPostsCount = 0
    if (existingPosts.totalDocs === 0) {
      for (const p of samplePosts) {
        await payload.create({
          collection: 'posts',
          data: {
            title: p.title,
            slug: p.slug,
            excerpt: p.excerpt,
            category: 'kien-thuc',
            status: 'published',
            publishedDate: new Date().toISOString(),
            author: authorId || undefined,
            content: createLexicalContent(p.excerpt),
          },
        })
        seededPostsCount++
      }
    }

    // 3. Khởi tạo Thực đơn tuần mẫu nếu chưa có
    const existingMenus = await payload.find({
      collection: 'weekly-menus',
      limit: 1,
    })

    let seededMenuCount = 0
    if (existingMenus.totalDocs === 0) {
      const now = new Date()
      const nextWeek = new Date()
      nextWeek.setDate(now.getDate() + 7)

      await payload.create({
        collection: 'weekly-menus',
        data: {
          weekTitle: 'Thực Đơn Tiêu Chuẩn Tuần Này',
          startDate: now.toISOString().split('T')[0],
          endDate: nextWeek.toISOString().split('T')[0],
          status: 'active',
          monday: {
            mainDish: 'Thịt kho tàu nước dừa trứng cút / Cá diêu hồng chiên xù',
            calories: '750 - 820 kcal',
            sideDish: 'Đậu cove xào thịt nạc băm',
            soup: 'Canh bí xanh nấu tôm khô hành hoa',
            dessert: 'Chuối già Nam Mỹ',
          },
          tuesday: {
            mainDish: 'Gà kho sả ớt đậm đà / Ba chỉ luộc mắm tôm chua',
            calories: '780 - 840 kcal',
            sideDish: 'Bắp cải thảo xào dầu hào nấm hương',
            soup: 'Canh cua đồng mồng tơi mướp hương',
            dessert: 'Dưa hấu Long An',
          },
          wednesday: {
            mainDish: 'Sườn heo non rim tiêu gừng / Tép xào hành hoa',
            calories: '760 - 830 kcal',
            sideDish: 'Đậu hũ non sốt cà chua hành lá',
            soup: 'Canh cải xoong nấu sườn băm',
            dessert: 'Thanh long ruột đỏ',
          },
          thursday: {
            mainDish: 'Bò xào ớt chuông cần tây / Cá thu Nhật kho mía',
            calories: '790 - 850 kcal',
            sideDish: 'Su su xào tỏi giòn ngọt',
            soup: 'Canh chua cá lóc dọc mùng',
            dessert: 'Ổi gọt sẵn chấm muối tôm',
          },
          friday: {
            mainDish: 'Vịt nướng mật ong sốt tiêu / Trứng cuộn xúc xích phô mai',
            calories: '800 - 860 kcal',
            sideDish: 'Rau muống xào tỏi xanh mướt',
            soup: 'Canh súp củ quả hầm xương ống',
            dessert: 'Sữa chua men sống Vinamilk',
          },
          saturday: {
            mainDish: 'Thịt heo xá xíu mật ong / Chả cá thác lác cốm xanh',
            calories: '740 - 810 kcal',
            sideDish: 'Cà tím nướng mỡ hành',
            soup: 'Canh rong biển đậu hũ thịt bằm',
            dessert: 'Cam sành Hàm Yên mọng nước',
          },
        },
      })
      seededMenuCount++
    }

    return NextResponse.json({
      success: true,
      message: 'Đồng bộ dữ liệu mẫu thành công!',
      seededPostsCount,
      seededMenuCount,
      existingPostsCount: existingPosts.totalDocs,
      existingMenuCount: existingMenus.totalDocs,
    })
  } catch (error: any) {
    console.error('Lỗi khi seed dữ liệu:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Lỗi khi đồng bộ dữ liệu mẫu' },
      { status: 500 }
    )
  }
}
