const mysql = require("mysql");

// Create a connection pool to the MySQL database
const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DATABASE_HOST,
  host: process.env.DATABASE_HOST,
  user: "root",
  password: "",
  database: "whatsapp-db",
});

module.exports = db;
