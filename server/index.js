const express = require("express");
const mysql = require('mysql');

const app = express();
const port = 3306;

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'proyecto_db',
});

app.get("/",(req, res) => {
        console.log("Connected!");
        const sqlInsert = "INSERT INTO proyecto_db.usuario (Carnet) VALUES (201212121);";
        db.query(sqlInsert, (err, result) => {
            console.log(err);
            res.send(sqlInsert);
            console.log("record");
        });
    });

app.listen(3001, () => {
    console.log("running on port 3001");
});
