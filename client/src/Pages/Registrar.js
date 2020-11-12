
import React, {useEffect, useState } from 'react';
import logoUSAC from '../img/logo-usac-png.png';
import '../EstilosCSS/App.css';
//import ReactDOM from 'react-dom';
import Axios from 'axios';

function Registrar(){
  
    const [RegistroAcademico, setUsuario] = useState('');
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Contraseña, setContraseña] = useState('');
    const [CorreoElectronico, setCorreoElectronico] = useState('');
    //const [usuarios, setUsuarios] = useState([]);

    useEffect( () => {
      Axios.get("https://localhost:3001/api/get").then((response)=>{
        console.log(response.data);
        //setUsuarios(response.data)
      });
    }, []) ;

  /*iniciar=async()=>{
    window.location.href="./PantallaIniciar";
  }

  login(e){
    ReactDOM.render(
      window.location.href="./Login"
    );
  }*/
  
const peticionPost= ()=>{
        Axios.post("https://localhost:3001/api/registrar",{
        Carnet: RegistroAcademico,
        Nombre: Nombre,
        Apellido: Apellido,
        Contrasena: Contraseña,
        Correo: CorreoElectronico
      })
      /*setUsuario([...usuarios,
      {Carnet: RegistroAcademico, Nombre: Contraseña}])*/
      
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
                  name="Contraseña" 
                  placeholder="Contraseña" 
                  required 
                  onChange ={(e)=>{setContraseña(e.target.value)}}
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
              <p>Ya tienes una cuenta? <button>Iniciar Seccion</button></p>
          
              
          </div>
        </form>
        //{usuarios.map((val)=>{return <h1>Usuarios: {val.Carnet} | Nombres:{val.Nombre}</h1> })}
    );
  }
export default Registrar;
