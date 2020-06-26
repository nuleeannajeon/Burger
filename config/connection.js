const mysql = require('mysql');
const mySQL_PORT = process.env.MYSQL_PORT || 3306;

const db = mysql.createConnection({
    host: DB_HOST,
    port: mySQL_PORT,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = db;