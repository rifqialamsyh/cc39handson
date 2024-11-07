const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test database connection and fetch data
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to the MySQL database.");

    // Run a test query to fetch all users
    connection.query("SELECT * FROM data", (err, results) => {
      if (err) {
        console.error("Error fetching data:", err.message);
      } else {
        console.log("Data from users table:", JSON.stringify(results, null, 2));
      }
      connection.release(); // Release the connection back to the pool
    });
  }
});

module.exports = pool.promise();
