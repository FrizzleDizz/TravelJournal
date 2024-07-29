import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

db.query(`
CREATE TABLE IF NOT EXISTS travel (
    id SERIAL PRIMARY KEY,
    Emoji TEXT,
    Username TEXT,
    Message TEXT
);

INSERT INTO travel (emoji, username, message) VALUES
('😀', 'Zaynab said:', 'Favourite country I visited was Japan!'),
('😀', 'Joe said:', 'Favourite country I visited was Jamaica!'),
('😀', 'Nathan said:', 'Favourite country I visited was Japan!'),
('😀', 'Noah said:', 'Favourite country I visited was Spain!');`);
