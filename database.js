const sqlite3 = require("sqlite3").verbose();

// Database file create
const db = new sqlite3.Database("./groups.db", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("✅ SQLite Database Connected!");

        // Groups table create
        db.run(`CREATE TABLE IF NOT EXISTS groups (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT UNIQUE NOT NULL
        )`);

        // Members table create
        db.run(`CREATE TABLE IF NOT EXISTS members (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            group_id INTEGER,
            name TEXT NOT NULL,
            FOREIGN KEY (group_id) REFERENCES groups (id)
        )`);
    }
});

module.exports = db;
