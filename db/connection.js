const mysql = require("mysql");

const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "learnify",
});

db.connect((err) => {
    if (err) {
        console.log("MYSQL connect error:", err.message);
        return;
    }

    console.log("Database connected successfully");
});

module.exports = db;