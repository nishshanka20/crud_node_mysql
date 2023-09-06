const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nishshanka",
  database: "shop_user",
});

module.exports = db;
