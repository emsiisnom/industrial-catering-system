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
    console.log('Seeding tabs data into weekly_menus row 1...');

    await pool.query(`
      UPDATE weekly_menus SET
        week_title = 'Thực Đơn Tiêu Chuẩn Tuần Này',
        status = 'active',
        monday_main_dish = 'Thịt kho tàu nước dừa trứng cút / Cá diêu hồng chiên xù xốt chua ngọt',
        monday_calories = '750 - 820 kcal',
        monday_side_dish = 'Đậu cove xào thịt nạc băm',
        monday_soup = 'Canh bí xanh nấu tôm khô hành hoa',
        monday_dessert = 'Chuối già Nam Mỹ',
        monday_note = 'Khởi đầu tuần mới đầy năng lượng',

        tuesday_main_dish = 'Gà kho sả ớt đậm đà / Ba chỉ luộc chấm mắm tôm chua',
        tuesday_calories = '780 - 840 kcal',
        tuesday_side_dish = 'Bắp cải thảo xào dầu hào nấm hương',
        tuesday_soup = 'Canh cua đồng mồng tơi mướp hương',
        tuesday_dessert = 'Dưa hấu Long An',
        tuesday_note = 'Tươi mát & giàu vitamin',

        wednesday_main_dish = 'Sườn heo non rim tiêu gừng / Tép xào hành hoa giòn rụm',
        wednesday_calories = '760 - 830 kcal',
        wednesday_side_dish = 'Đậu hũ non sốt cà chua hành lá',
        wednesday_soup = 'Canh cải xoong nấu sườn băm',
        wednesday_dessert = 'Thanh long ruột đỏ',
        wednesday_note = 'Bổ sung khoáng chất & chất đạm',

        thursday_main_dish = 'Bò xào ớt chuông cần tây / Cá thu Nhật kho mía ngọt thịt',
        thursday_calories = '790 - 850 kcal',
        thursday_side_dish = 'Su su xào tỏi giòn ngọt',
        thursday_soup = 'Canh chua cá lóc dọc mùng thì là',
        thursday_dessert = 'Ổi gọt sẵn chấm muối tôm Tây Ninh',
        thursday_note = 'Kích thích vị giác, dễ tiêu',

        friday_main_dish = 'Vịt nướng mật ong sốt tiêu đen / Trứng cuộn xúc xích phô mai',
        friday_calories = '800 - 860 kcal',
        friday_side_dish = 'Rau muống xào tỏi xanh mướt',
        friday_soup = 'Canh súp củ quả hầm xương ống',
        friday_dessert = 'Sữa chua men sống Vinamilk',
        friday_note = 'Thực đơn cải thiện cuối tuần',

        saturday_main_dish = 'Thịt heo xá xíu mật ong / Chả cá thác lác chiên cốm xanh',
        saturday_calories = '740 - 810 kcal',
        saturday_side_dish = 'Cà tím nướng mỡ hành',
        saturday_soup = 'Canh rong biển đậu hũ thịt bằm',
        saturday_dessert = 'Cam sành Hàm Yên mọng nước',
        saturday_note = 'Nhẹ nhàng thanh mát cho ca tăng cường'
      WHERE id = 1;
    `);

    console.log('Row 1 updated with full tab menu data!');
  } catch (err) {
    console.error('Error updating:', err);
  } finally {
    await pool.end();
  }
}

run();
