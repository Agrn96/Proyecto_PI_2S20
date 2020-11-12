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

app.get('/api/pub/get', (req, res) => {
    const sqlSelect =
        "SELECT * FROM proyecto_db.publicacion LEFT JOIN proyecto_db.curso ON proyecto_db.publicacion.Curso_CodigoCurso=proyecto_db.curso.CodigoCurso LEFT JOIN proyecto_db.catedratico ON proyecto_db.publicacion.Catedratico_NoCatedratico=proyecto_db.catedratico.NoCatedratico;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get('/api/pub/:idPub', (req, res) => {
    const idPub = req.params.idPub;
    const sqlSelect =
        "SELECT * FROM proyecto_db.publicacion LEFT JOIN proyecto_db.curso ON proyecto_db.publicacion.Curso_CodigoCurso=proyecto_db.curso.CodigoCurso LEFT JOIN proyecto_db.catedratico ON proyecto_db.publicacion.Catedratico_NoCatedratico=proyecto_db.catedratico.NoCatedratico WHERE idPublicacion = ?;";
    db.query(sqlSelect, idPub, (err, result) => {
        res.send(result);
    })
})

app.get('/api/com/:idPub', (req, res) => {
    const idPub = req.params.idPub;
    const sqlSelect =
        "SELECT * FROM proyecto_db.comentario WHERE Publicacion_idPublicacion=?;";
    db.query(sqlSelect, idPub, (err, result) => {
        res.send(result);
    })
})

app.get('/api/pub/filterCurso/:curso', (req, res) => {

    const search = req.params.curso;
    //console.log(search);
    const sqlSelect =
        "SELECT * FROM proyecto_db.publicacion LEFT JOIN proyecto_db.curso ON proyecto_db.publicacion.Curso_CodigoCurso=proyecto_db.curso.CodigoCurso LEFT JOIN proyecto_db.catedratico ON proyecto_db.publicacion.Catedratico_NoCatedratico=proyecto_db.catedratico.NoCatedratico WHERE proyecto_db.publicacion.Curso_CodigoCurso=?;";
    db.query(sqlSelect, search, (err, result) => {
        res.send(result);
        //console.log(result);
    })
})

app.get('/api/pub/filterCursoNombre/:curso', (req, res) => {

    const search = req.params.curso;
    //console.log(search);
    const sqlSelect =
        "SELECT * FROM proyecto_db.publicacion LEFT JOIN proyecto_db.curso ON proyecto_db.publicacion.Curso_CodigoCurso=proyecto_db.curso.CodigoCurso LEFT JOIN proyecto_db.catedratico ON proyecto_db.publicacion.Catedratico_NoCatedratico=proyecto_db.catedratico.NoCatedratico WHERE proyecto_db.curso.Nombre LIKE ?;";
    db.query(sqlSelect, `%${search}%`, (err, result) => {
        res.send(result);
        //console.log(result);
    })
})

app.get('/api/pub/filterCatedraticoNombre/:catedratico', (req, res) => {

    const search = req.params.catedratico;
    //console.log(search);
    const sqlSelect =
        "SELECT * FROM proyecto_db.publicacion LEFT JOIN proyecto_db.curso ON proyecto_db.publicacion.Curso_CodigoCurso=proyecto_db.curso.CodigoCurso LEFT JOIN proyecto_db.catedratico ON proyecto_db.publicacion.Catedratico_NoCatedratico=proyecto_db.catedratico.NoCatedratico WHERE proyecto_db.catedratico.Nombres LIKE ?";
    db.query(sqlSelect, `%${search}%`, (err, result) => {
        res.send(result);
        //console.log(result);
    })
})

app.get('/api/pub/filterCatedratico/:catedratico', (req, res) => {

    const search = req.params.catedratico;
    //console.log(search);
    const sqlSelect =
        "SELECT * FROM proyecto_db.publicacion LEFT JOIN proyecto_db.curso ON proyecto_db.publicacion.Curso_CodigoCurso=proyecto_db.curso.CodigoCurso LEFT JOIN proyecto_db.catedratico ON proyecto_db.publicacion.Catedratico_NoCatedratico=proyecto_db.catedratico.NoCatedratico WHERE proyecto_db.publicacion.Catedratico_NoCatedratico=?;";
    db.query(sqlSelect, search, (err, result) => {
        res.send(result);
        //console.log(result);
    })
})

app.get('/api/cursos/get', (req, res) => {
    const sqlSelect =
        "SELECT * FROM proyecto_db.curso;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get('/api/catedraticos/get', (req, res) => {
    const sqlSelect =
        "SELECT * FROM proyecto_db.catedratico;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

app.get('/api/catedraticos_cursos/get', (req, res) => {
    const sqlSelect =
        "SELECT idCatedraticoCurso,Curso_CodigoCurso, Nombres, Apellidos, Nombre FROM proyecto_db.curso_catedratico JOIN proyecto_db.catedratico ON proyecto_db.curso_catedratico.Catedratico_NoCatedratico=proyecto_db.catedratico.NoCatedratico JOIN proyecto_db.curso ON proyecto_db.curso_catedratico.Curso_CodigoCurso=proyecto_db.curso.CodigoCurso;";
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

app.post('/api/pub/insert', (req, res) => {

    const usuario = req.body.usuario
    const mensaje = req.body.mensaje
    const tipo = req.body.tipo
    const extra = req.body.extra

    if (tipo == 1) {
        const sqlInsert =
            "INSERT INTO proyecto_db.publicacion (Mensaje, Usuario_Carnet, Tipo, Catedratico_NoCatedratico) VALUES (?,?,?,?)";
        db.query(sqlInsert, [mensaje, usuario, tipo, extra], (err, result) => {
            console.log(err);
        })
    } else if (tipo == 2) {
        const sqlInsert =
            "INSERT INTO proyecto_db.publicacion (Mensaje, Usuario_Carnet, Tipo, Curso_CodigoCurso) VALUES (?,?,?,?)";
        db.query(sqlInsert, [mensaje, usuario, tipo, extra], (err, result) => {
            console.log(err);
        })
    } else {
        const sqlSelect =
            "SELECT * FROM proyecto_db.curso_catedratico WHERE proyecto_db.curso_catedratico.idCatedraticoCurso=?;";
        db.query(sqlSelect, extra, (err, result) => {
            //console.log(result[0].Curso_CodigoCurso);
            const sqlInsert =
                "INSERT INTO proyecto_db.publicacion (Mensaje, Usuario_Carnet, Tipo, Curso_Catedratico_idCatedraticoCurso, Curso_CodigoCurso, Catedratico_NoCatedratico) VALUES (?,?,?,?,?,?)";
            db.query(sqlInsert, [mensaje, usuario, tipo, extra, result[0].Curso_CodigoCurso, result[0].Catedratico_NoCatedratico], (err, result) => {
                console.log(err);
            })
        })


    }

});

app.post('/api/com/insert', (req, res) => {

    const usuario = req.body.usuario
    const mensaje = req.body.mensaje
    const idPub = req.body.idPub

    const sqlInsert =
        "INSERT INTO proyecto_db.comentario (Mensaje, Usuario_Carnet, Publicacion_idPublicacion) VALUES (?,?,?)";
    db.query(sqlInsert, [mensaje, usuario, idPub], (err, result) => {
        console.log(err);
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

//Servidor esta corriendo en el port 3001
app.listen(3001, () => {
    console.log("running on port 3001");
});
