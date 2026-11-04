const fs = require('fs');
const { Pool } = require('pg');

const envContent = fs.readFileSync('.env.local', 'utf-8');
const match = envContent.match(/DATABASE_URI=(.*)/);
const uri = match[1].trim();

const pool = new Pool({
  connectionString: uri,
  ssl: { rejectUnauthorized: false },
});

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

async function run() {
  try {
    console.log('Adding columns to weekly_menus table...');

    await pool.query('ALTER TABLE weekly_menus ADD COLUMN IF NOT EXISTS general_notes TEXT;');

    for (const d of days) {
      await pool.query(`ALTER TABLE weekly_menus ADD COLUMN IF NOT EXISTS ${d}_main_dish VARCHAR;`);
      await pool.query(`ALTER TABLE weekly_menus ADD COLUMN IF NOT EXISTS ${d}_calories VARCHAR;`);
      await pool.query(`ALTER TABLE weekly_menus ADD COLUMN IF NOT EXISTS ${d}_side_dish VARCHAR;`);
      await pool.query(`ALTER TABLE weekly_menus ADD COLUMN IF NOT EXISTS ${d}_soup VARCHAR;`);
      await pool.query(`ALTER TABLE weekly_menus ADD COLUMN IF NOT EXISTS ${d}_dessert VARCHAR;`);
      await pool.query(`ALTER TABLE weekly_menus ADD COLUMN IF NOT EXISTS ${d}_image_id INTEGER REFERENCES media(id) ON DELETE SET NULL;`);
      await pool.query(`ALTER TABLE weekly_menus ADD COLUMN IF NOT EXISTS ${d}_note VARCHAR;`);
    }

    console.log('Columns successfully created!');

    const res = await pool.query("SELECT column_name FROM information_schema.columns WHERE table_name = 'weekly_menus'");
    console.log('Current columns in weekly_menus:', res.rows.map(r => r.column_name));
  } catch (err) {
    console.error('Migration error:', err);
  } finally {
    await pool.end();
  }
}

run();
