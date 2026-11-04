const fs = require('fs');
const { Pool } = require('pg');

const envContent = fs.readFileSync('.env.local', 'utf-8');
const match = envContent.match(/DATABASE_URI=(.*)/);
const uri = match[1].trim();

const pool = new Pool({
  connectionString: uri,
  ssl: { rejectUnauthorized: false },
});

async function run() {
  try {
    console.log('Adding price_range column and updating row 1...');
    await pool.query('ALTER TABLE weekly_menus ADD COLUMN IF NOT EXISTS price_range VARCHAR;');
    await pool.query("UPDATE weekly_menus SET price_range = '30.000đ - 35.000đ/suất' WHERE id = 1;");

    console.log('Inserting second menu (50.000đ - 65.000đ/suất)...');
    
    // Check if VIP menu already exists
    const check = await pool.query("SELECT id FROM weekly_menus WHERE week_title LIKE '%Chuyên Gia%' OR price_range LIKE '%65.000%'");
    if (check.rows.length === 0) {
      const now = new Date();
      const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

      await pool.query(`
        INSERT INTO weekly_menus (
          week_title, price_range, start_date, end_date, status, created_at, updated_at,
          monday_main_dish, monday_calories, monday_side_dish, monday_soup, monday_dessert, monday_note,
          tuesday_main_dish, tuesday_calories, tuesday_side_dish, tuesday_soup, tuesday_dessert, tuesday_note,
          wednesday_main_dish, wednesday_calories, wednesday_side_dish, wednesday_soup, wednesday_dessert, wednesday_note,
          thursday_main_dish, thursday_calories, thursday_side_dish, thursday_soup, thursday_dessert, thursday_note,
          friday_main_dish, friday_calories, friday_side_dish, friday_soup, friday_dessert, friday_note,
          saturday_main_dish, saturday_calories, saturday_side_dish, saturday_soup, saturday_dessert, saturday_note,
          general_notes
        ) VALUES (
          'Thực Đơn Cao Cấp Chuyên Gia & Khối Văn Phòng',
          '50.000đ - 65.000đ/suất',
          $1, $2, 'active', NOW(), NOW(),
          'Bò sốt tiêu đen bánh bao / Tôm sú rim thịt ba rọi cháy cạnh', '850 - 920 kcal', 'Măng tây tươi xào tỏi & nấm đùi gà', 'Canh sườn non hầm ngũ quả hạt sen', 'Sữa chua nha đam Vinamilk & Nho Mỹ', 'Bữa ăn mở đầu tuần năng lượng cao cho chuyên gia',
          'Cá hồi Na Uy áp chảo bơ chanh / Gà ta quay sốt nấm hương', '860 - 940 kcal', 'Đọt su su xào tỏi & Đậu hũ non xốt thịt cua', 'Canh gà ta hầm nấm đông cô lá giang', 'Dưa lưới hoàng kim & Bưởi da xanh', 'Bổ sung Omega-3 và vitamin nhóm B',
          'Sườn heo Mỹ nướng BBQ mật ong / Mực nhồi thịt sốt cà chua', '880 - 950 kcal', 'Cải ngồng xào nấm linh chi & Bông cải xanh luộc', 'Canh ngao hoa nấu chua cay sấu Hà Nội', 'Xoài cát Hòa Lộc & Sữa tươi tiệt trùng', 'Hương vị đậm đà, cân bằng đạm - xơ',
          'Thăn bò Úc lúc lắc khoai tây / Chim cút quay mật ong tiêu rừng', '870 - 930 kcal', 'Rau mầm xào thịt bò & Salad dưa chuột dầu giấm', 'Canh súp bắp non thịt cua tuyết', 'Thanh long ruột đỏ & Chè yến chưng hạt chia', 'Tăng cường chất sắt và chất chống oxy hóa',
          'Vịt quay Bắc Kinh sốt cam / Tôm càng xanh hấp nước dừa', '890 - 960 kcal', 'Rau muống non xào thịt ba chỉ gác bếp', 'Canh chua cá bớp lá lốt đặc sản', 'Chè dưỡng nhan tuyết yến hạt sen', 'Thực đơn cải thiện chất lượng cuối tuần',
          'Cơm rang hải sản Hoàng Gia / Cá chẽm hấp Hong Kong xì dầu', '850 - 910 kcal', 'Ngồng cải làn xào dầu hào & Trứng hấp tôm thịt', 'Canh rong biển đậu non thịt bò bằm', 'Cam sành Hàm Yên mọng nước', 'Thực đơn thanh mát ca trực cuối tuần',
          'Tiêu chuẩn thực đơn cao cấp dành cho quản lý, chuyên gia nước ngoài và khối văn phòng doanh nghiệp. Cam kết định lượng đạm động vật cao cấp (hải sản tươi, bò Mỹ, cá hồi), gia vị nhập khẩu chính hãng.'
        );
      `, [now.toISOString(), nextWeek.toISOString()]);
      console.log('VIP Menu successfully created!');
    } else {
      console.log('VIP Menu already exists, id:', check.rows[0].id);
    }

    const list = await pool.query('SELECT id, week_title, price_range, status FROM weekly_menus');
    console.log('All weekly menus:', list.rows);
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await pool.end();
  }
}

run();
