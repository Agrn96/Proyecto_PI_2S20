import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from "react-router";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './EstilosPerfil.css'

function Perfil() {

    let history = useHistory();

    return (
        <div>

            <div id="EtiquetasDatos">
                <div class="Etiqueta" id="Nombre">Nombres:</div>
                <div class="Etiqueta" id="Apellido">Apellidos:</div>
                <div class="Etiqueta" id="Correo">Correo:</div>
            </div>
            <div id="DatosUsuario">
                <div class="Datos" id="Nombres">Nombre1 Nombre2</div>
                <div class="Datos" id="Apellidos">Apellido1 Apellido2</div>
                <div class="Datos" id="CorreoReg">usuario@dominio.algo</div>
            </div>

            <button class="boton" id="Pensum" onClick={() => history.push('/Perfil/VerPensum')}>
                Ver Pensum </button>
            <button class="boton" id="Modificar" onClick={() => history.push('/Perfil/ModificarDatos')}>
                Modificar Datos </button>
            <button class="boton" id="Cargar" onClick={() => history.push('/Perfil/CargarCursos2')}>
                Cargar Cursos </button>

            <div id="ListaCursos">
                <ul id="ListaCursosAprobados">
                    <li class="CursoAprobado"></li>
                    <li class="CursoAprobado"></li>
                </ul>
            </div>

        </div>
    )

}

export default Perfil