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

app.post("/api/login/:user", (req, res) => {
    const usuario = req.params.user
    const sqlSelect =
        "SELECT * FROM proyecto_db.usuario WHERE Carnet = ? ";
    db.query(sqlSelect, usuario, (err, result) => {
        if (err) {
            res.send({ err: err })
        }
        if (result.length > 0) {
            console.log(result);
            res.send(result)
        } else {
            res.send({ message: "Wrong username/password combination!" })
        }
    })
});

app.post('/api/recuperar', (req, res) => {
    const RegistroAcademico = Number(req.body.RegistroAcademico)
    const Contrasena = req.body.Contrasena
    const CorreoElectronico = req.body.CorreoElectronico

    const sqlInsert =
        "INSERT INTO proyecto_db.usuario (Carnet, Nombres, Apellidos, Contrasena, Correo) VALUES (?,?,?)"
    db.query(sqlInsert, [RegistroAcademico, Contrasena ,CorreoElectronico], (err, result) => {
        console.log(err);
    })
});

app.post('/api/registrar', (req, res) => {
    const RegistroAcademico = Number(req.body.RegistroAcademico)
    const Nombre = req.body.Nombre
    const Apellido = re.body.Apellido
    const Contrasena = req.body.Contrasena
    const CorreoElectronico = req.body.CorreoElectronico

    const sqlInsert =
        "INSERT INTO proyecto_db.usuario (Carnet, Nombres, Apellidos, Contrasena, Correo) VALUES (?,?,?,?,?)"
    db.query(sqlInsert, [RegistroAcademico, Nombre, Apellido ,Contrasena ,CorreoElectronico], (err, result) => {
        console.log(err);
    })
});

//Servidor esta corriendo en el port 3001
app.listen(3001, () => {
    console.log("running on port 3001");
});
