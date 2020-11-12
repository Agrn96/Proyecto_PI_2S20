import { React, useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";
import Axios from 'axios';
import '../EstilosCSS/App.css';
function Comentarios() {

    let history = useHistory();
    let { idPub } = useParams();
    let { user } = useParams();
    const [mensaje, setMensaje] = useState("");

    const [comentarios, setComentarios] = useState([]);
    const [publicacion, setPublicacion] = useState([]);

    useEffect(() => {//Pulls initial data from sql database into an array
        Axios.get(`http://localhost:3001/api/com/${idPub}`).then((response) => {
            console.log(response.data);
            setComentarios(response.data);
        });
        Axios.get(`http://localhost:3001/api/pub/${idPub}`).then((response) => {
            console.log(response.data);
            setPublicacion(response.data);
        });
    }, []);

    const submitCom = () => {//INSERT statement updates sql database and updates list/array shown in real time, Register User
        Axios.post("http://localhost:3001/api/com/insert", {
            usuario: user,
            mensaje: mensaje,
            idPub: idPub
        });
        setComentarios([...comentarios,//Agrega a la lista que aparece de Usuarios
        {
            Usuario_Carnet: user,
            Mensaje: mensaje,
            Publicacion_idPublicacion: idPub
        },
        ]);
    };

    return (
        <div>
            <div>
                <h2 className="title">Publicacion</h2>
                {publicacion.map((val) => {
                    return (
                        <div className="cardPub">
                            <p><b>Usuario:</b> {val.Usuario_Carnet} </p>
                            <p><b>Curso:</b> {val.Nombre} </p>
                            <p><b>Catedratico:</b> {val.Nombres} </p>
                            <p><b>Mensaje:</b> {val.Mensaje}</p>

                            <button>Ver Perfil</button>
                            <button onClick={() => history.push("/")}>Regresar</button>

                        </div>

                    )
                })}
            </div>
            <div className="cardPub">
                <h2 className="title">Dejar Comentario</h2>
                <input type="text" id="mensaje1" name="mensaje" placeholder={"Agregar Mensaje (Limite 100 Caracters)"} onChange={(e) => {
                    setMensaje(e.target.value);
                }} />
                <button onClick={(submitCom)}>Publicar</button>
            </div>

            <div>
                <h2 className="title">Comentarios</h2>
                {comentarios.map((val) => {
                    return (
                        <div className="cardPub">
                            <p><b>Usuario:</b> {val.Usuario_Carnet} </p>
                            <p><b>Mensaje:</b> {val.Mensaje}</p>

                            <button>Ver Perfil</button>
                            <button>Dejar Comentario</button>

                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default Comentarios
