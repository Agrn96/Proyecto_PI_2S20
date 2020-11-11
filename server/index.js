const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser")
const cors = require("cors");
const { restart } = require("nodemon");

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


//API calls para login
//API call para conseguir informacion
app.get('/api/get', (req, res) => {
    const sqlSelect =
        "SELECT * FROM proyecto_db.usuario";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.post("/api/login/:user", (req, res) => {
    const usuario = req.params.user
    const sqlSelect =
        "SELECT * FROM proyecto_db.usuario WHERE Carnet = ? ";
    db.query(sqlSelect, usuario, (err, result) => {
        if (err) {
            res.send({ err: err })
        }

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({ message: "Wrong username/password combination!" })
        }

    })
});

//API call para agregar informacion al base de datos
app.post('/api/insert', (req, res) => {

    const usuario = req.body.usuario
    const contrasena = req.body.contrasena

    const sqlInsert =
        "INSERT INTO proyecto_db.usuario (Carnet, Nombres) VALUES (?,?)";
    db.query(sqlInsert, [usuario, contrasena], (err, result) => {
        console.log(result);
    })
});

app.delete("/api/delete/:user", (req, res) => {
    const name = req.params.user
    const sqlDelete =
        "DELETE FROM proyecto_db.usuario WHERE Carnet = ?";
    db.query(sqlDelete, name, (err, result) => {
        if (err) console.log(err);
    });
});

app.put("/api/update", (req, res) => {
    const name = req.body.usuario;
    const nombre = req.body.contrasena;
    const sqlUpdate =
        "UPDATE proyecto_db.usuario SET Nombres = ? WHERE Carnet = ?";
    console.log(name);
    db.query(sqlUpdate, [nombre, name], (err, result) => {
        if (err) console.log(err);
    });
});

//API calls para *
//API calls para *
//API calls para *

//Servidor esta corriendo en el port 3001
app.listen(3001, () => {
    console.log("running on port 3001");
});
