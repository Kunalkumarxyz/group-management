const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ API: Naya Group Create Karo
app.post("/api/groups", (req, res) => {
    const { name } = req.body;
    db.run("INSERT INTO groups (name) VALUES (?)", [name], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: "✅ Group created!", id: this.lastID });
    });
});

// ✅ API: Saare Groups Dekho
app.get("/api/groups", (req, res) => {
    db.all("SELECT * FROM groups", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// ✅ API: Group Me Member Add Karo
app.post("/api/groups/:groupId/members", (req, res) => {
    const { groupId } = req.params;
    const { name } = req.body;

    db.run("INSERT INTO members (group_id, name) VALUES (?, ?)", [groupId, name], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: "✅ Member added!", id: this.lastID });
    });
});

// ✅ API: Specific Group Ke Members Dekho
app.get("/api/groups/:groupId/members", (req, res) => {
    const { groupId } = req.params;

    db.all("SELECT * FROM members WHERE group_id = ?", [groupId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// ✅ Server Start Karo
app.listen(5000, () => {
    console.log("✅ Server running on port 5000");
});

// ✅ API: Search Groups by Name
app.get("/api/groups/search/:name", (req, res) => {
    const { name } = req.params;
    db.all("SELECT * FROM groups WHERE name LIKE ?", [`%${name}%`], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

