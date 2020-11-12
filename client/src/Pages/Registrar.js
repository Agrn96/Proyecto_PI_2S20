
import React, {useEffect, useState } from 'react';
import logoUSAC from '../img/logo-usac-png.png';
import '../EstilosCSS/App.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Registrar(){
  
    const [RegistroAcademico, setUsuario] = useState('');
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Contrasena, setContrasena] = useState('');
    const [CorreoElectronico, setCorreoElectronico] = useState('');

    useEffect( () => {
      Axios.get("http://localhost:3001/api/get").then((response)=>{
        console.log(response.data);
      });
    }, []) ;
  
const peticionPost= ()=>{
      Axios.post("http://localhost:3001/api/registrar",{
        RegistroAcademico: RegistroAcademico,
        Nombre: Nombre,
        Apellido: Apellido,
        Contrasena: Contrasena,
        CorreoElectronico: CorreoElectronico
      });
};
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
                  <input type="text" 
                  name="Nombre"  
                  placeholder="Nombre" 
                  required
                  onChange ={(e)=>{setNombre(e.target.value)}}
                  />
              </div>
              <div className="input">
                  <input 
                  type="text" 
                  name="Apellido" 
                  placeholder="Apellido" 
                  required 
                  onChange ={(e)=>{setApellido(e.target.value)}}
                  />
              </div>
              <div className="input">
                  <input 
                  type="password" 
                  name="Contrasena" 
                  placeholder="Contraseña" 
                  required 
                  onChange ={(e)=>{setContrasena(e.target.value)}}
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
              <button className="button" onClick={peticionPost}>Registrarse</button>
              <p>Ya tienes una cuenta? <Link to='/' className="link">Recuperar Contrasena</Link></p>
          </div>
        </form>
    );
  }
export default Registrar;
