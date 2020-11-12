import React, { useState, useEffect } from 'react';
import '../EstilosCSS/App.css';
import Axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

document.body.style = 'background: grey;';


function PantallaInicial() {
    let { user } = useParams();
    let history = useHistory();
    //Variables de insert
    const [search, setSearch] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [value, setValue] = useState(1);
    const [searchValue, setSearchValue] = useState("Catedratico");
    const [selectvalue0, setselectvalue0] = useState(1);
    const [selectvalue1, setselectvalue1] = useState(1);
    const [selectvalue2, setselectvalue2] = useState(1);

    //Variables de get
    const [publicaciones, setPublicaciones] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [catedraticos, setCatedraticos] = useState([]);
    const [catedraticos_Cursos, setCatedraticos_Cursos] = useState([]);



    useEffect(() => {//Pulls initial data from sql database into an array
        Axios.get("http://localhost:3001/api/pub/get").then((response) => {
            //console.log(response.data);
            setPublicaciones(response.data)
        });
        Axios.get("http://localhost:3001/api/cursos/get").then((response) => {
            //console.log(response.data);
            setCursos(response.data)
        });
        Axios.get("http://localhost:3001/api/catedraticos/get").then((response) => {
            //console.log(response.data);
            setCatedraticos(response.data)
        });
        Axios.get("http://localhost:3001/api/catedraticos_cursos/get").then((response) => {
            //console.log(response.data);
            setCatedraticos_Cursos(response.data)
        });
    }, []);

    const filterPub = () => {
        console.log(search);
        console.log(searchValue);
        if (searchValue == "Catedratico") {
            Axios.get(`http://localhost:3001/api/pub/filterCatedratico/${search}`).then((response) => {
                console.log(response.data);
                setPublicaciones(response.data)
            });
        } else if (searchValue == "Curso") {
            Axios.get(`http://localhost:3001/api/pub/filterCurso/${search}`).then((response) => {
                console.log(response.data);
                setPublicaciones(response.data)
            });
        } else if (searchValue == "Curso_Nombre") {
            Axios.get(`http://localhost:3001/api/pub/filterCursoNombre/${search}`).then((response) => {
                console.log(response.data);
                setPublicaciones(response.data)
            });
        } else {
            Axios.get(`http://localhost:3001/api/pub/filterCatedraticoNombre/${search}`).then((response) => {
                console.log(response.data);
                setPublicaciones(response.data)
            });
        }

    }

    const submitPub = () => {//INSERT statement updates sql database and updates list/array shown in real time, Register User
        if (value == 1) {
            Axios.post("http://localhost:3001/api/pub/insert", {
                usuario: user,
                mensaje: mensaje,
                tipo: value,
                extra: selectvalue0
            });
        } else if (value == 2) {
            Axios.post("http://localhost:3001/api/pub/insert", {
                usuario: user,
                mensaje: mensaje,
                tipo: value,
                extra: selectvalue1
            });
        } else {
            Axios.post("http://localhost:3001/api/pub/insert", {
                usuario: user,
                mensaje: mensaje,
                tipo: value,
                extra: selectvalue2
            });
        }
    };

    const handleSelect0 = (e) => {
        if (value == 1) {
            setselectvalue0(e)
        }
    }
    const handleSelect1 = (e) => {
        if (value == 2) {
            setselectvalue1(e)
        }
    }
    const handleSelect2 = (e) => {
        if (value == 3) {
            setselectvalue2(e)
        }
    }
    return (
        <div>
            <div className="cardPub">
                <input type="text" name="search" placeholder={"search"} onChange={(e) => {
                    setSearch(e.target.value);
                }} />
                <input type="radio" value="Catedratico" name="tipo_Buscar" defaultChecked onClick={() => {
                    setSearchValue("Catedratico");
                }} />Catedratico
                <input type="radio" value="Curso" name="tipo_Buscar" onClick={() => {
                    setSearchValue("Curso");
                }} />Curso
                <input type="radio" value="Nombre de Curso" name="tipo_Buscar" onClick={() => {
                    setSearchValue("Curso_Nombre");
                }} />Nombre de Curso
                <input type="radio" value="Nombre de Catedratico" name="tipo_Buscar" onClick={() => {
                    setSearchValue("Catedratico_Nombre");
                }} />Nombre de Catedratico
                <button onClick={filterPub}>Buscar</button>
            </div>

            <div>
                <h2 className="title">Crea tu Publicacion</h2>
                <div className="cardPub">
                    <div className="row">
                        Tipo de Publicacion:
                        <input type="radio" value="1" name="tipo_Crear" defaultChecked onClick={() => {
                            setValue(1)
                        }} />Catedratico
                        <input type="radio" value="2" name="tipo_Crear" onClick={() => {
                            setValue(2)
                        }} />Curso
                        <input type="radio" value="3" name="tipo_Crear" onClick={() => {
                            setValue(3)
                        }} />Catedratico de un Curso
                    </div>
                    <div>
                        <select name="cat" id="select_Catedraticos" onChange={(e) => {
                            handleSelect0(e.target.value);
                        }}>
                            {catedraticos.map((val) => {
                                return (
                                    <option id={val.NoCatedratico} value={val.NoCatedratico} >{val.Nombres}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        <select name="cursos" id="select_Cursos" onChange={(e) => {
                            handleSelect1(e.target.value);
                        }}>
                            {cursos.map((val) => {
                                return (
                                    <option id={val.CodigoCurso} value={val.CodigoCurso}>{val.Nombre}</option>
                                )
                            })}
                        </select>
                    </div>

                    <div>
                        <select name="cat_curso" id="select_Catedraticos_Cursos" onChange={(e) => {
                            handleSelect2(e.target.value);
                        }} >
                            {catedraticos_Cursos.map((val) => {
                                return (
                                    <option id={val.idCatedraticoCurso} value={val.idCatedraticoCurso}>{val.Nombre}: {val.Nombres}</option>
                                )
                            })}
                        </select>
                    </div>

                    <input type="text" id="mensaje1" name="mensaje" placeholder={"Agregar Mensaje (Limite 100 Caracters)"} onChange={(e) => {
                        setMensaje(e.target.value);
                    }} />
                    <button onClick={(submitPub)}>Publicar</button>
                    <button>Clear</button>
                </div>
            </div>

            <div>
                <h2 className="title">Publicaciones</h2>
                {publicaciones.map((val) => {
                    return (
                        <div className="cardPub">
                            <p><b>Usuario:</b> {val.Usuario_Carnet} </p>
                            <p><b>Curso:</b> {val.Nombre} </p>
                            <p><b>Catedratico:</b> {val.Nombres} </p>
                            <p><b>Mensaje:</b> {val.Mensaje}</p>

                            <button onClick={() => history.push(`/${user}/pub/${val.idPublicacion}`)}>Ver Comentarios</button>
                            <button onClick={() => history.push(`/${user}/Perfil`)}>Ver Perfil</button>
                            <button>Dejar Comentario</button>

                        </div>

                    )
                })}
            </div>
        </div>



    );
}

export default PantallaInicial
