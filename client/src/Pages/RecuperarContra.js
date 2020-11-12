import React, {useEffect, useState } from 'react';
import logoUSAC from '../img/logo-usac-png.png';
import '../EstilosCSS/App.css';
import Axios from 'axios';

function RecuperarContra(){
  
const [RegistroAcademico, setUsuario] = useState('');
const [Contrasena, setContrasena] = useState('');
const [CorreoElectronico, setCorreoElectronico] = useState('');

useEffect( () => {
    Axios.get("http://localhost:3001/api/get").then((response)=>{
    console.log(response.data);
    });
}, []) ;

const peticionPost= ()=>{
    Axios.post("http://localhost:3001/api/recuperar",{
    RegistroAcademico: RegistroAcademico,
    Contrasena: Contrasena,
    CorreoElectronico: CorreoElectronico
    });
}
    return (
      <form className="formulario" >
                <div className="logo-usac">
                <img className="logo" src={logoUSAC} alt={'USAC'}></img>
                </div>
                <div className="conten">
                <div className="input">
                    <input 
                    type="text" 
                    name="RegistroAcademico" 
                    placeholder="Registro Academico" 
                    required 
                    onChange ={(e)=>{setUsuario(e.target.value)}}
                    />
                </div>
                <div className="input">
                  <input 
                  type="email" 
                  name="CorreoElectronico" 
                  placeholder="Correo Electronico" 
                  required 
                  onChange ={(e)=>{setCorreoElectronico(e.target.value)}}
                  />
                </div>
                <div className="input">
                    <input 
                    type="password" 
                    name="Contrasena" 
                    placeholder="Nueva Contraseña" 
                    required 
                    onChange ={(e)=>{setContrasena(e.target.value)}}
                    />
                </div>
                    <button className="button" onClick={peticionPost}>Recuperar Contrasena</button>
                </div>
            </form>
    );
  
}

export default RecuperarContra;
