const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser")
const cors = require("cors");

const app = express();
const port = 3306;
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'proyecto_db',
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API call para conseguir informacion
app.get('/api/get', (req, res) => {
    const sqlSelect =
        "SELECT * FROM proyecto_db.usuario";
    db.query(sqlSelect, (err, result)=> {
        res.send(result);
    })
})

//API call para agregar informacion al base de datos
app.post('/api/insert', (req, res) => {

    const usuario = req.body.usuario
    const contrasena = req.body.contrasena

    const sqlInsert =
        "INSERT INTO proyecto_db.usuario (Carnet, Nombres) VALUES (?,?)"
    db.query(sqlInsert, [usuario, contrasena], (err, result) => {
        console.log(result);
    })
});

//Servidor esta corriendo en el port 3001
app.listen(3001, () => {
    console.log("running on port 3001");
});
