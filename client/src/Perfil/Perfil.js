import React from 'react'
import ReactDOM from 'react-dom'
import './EstilosPerfil.css'

class Perfil extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return(
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

                <div id="VerPensum">
                    <button onClick={this.verPerfil}>Ver Pensum</button>
                </div>

                <div id="ModificarDatos">

                </div>

                <div id="CargarCursos">

                </div>


                <div id="ListaCursos">
                    <ul id="ListaCursosAprobados">
                        <li class="CursoAprobado"></li>
                        <li class="CursoAprobado"></li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Perfil