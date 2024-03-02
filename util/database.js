const mysql = require("mysql2");

let _db;

// MySQL connection

const mysqlConnect = (callback) => {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Change it to your MySQL credentials
    password: "root", // Change it to your MySQL credentials
    database: "gymbs",
  });

  // Check if database connected
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err);
      return;
    }
    console.log("Connected to database successfully");
  });
};

module.exports = mysqlConnect;
