const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config();

const conn = mysql.createConnection({
  host: process.env.HOST,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = { conn };
