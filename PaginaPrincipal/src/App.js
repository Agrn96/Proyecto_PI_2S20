import React, { Component } from 'react';
import logoUSAC from './img/logo-usac-png.png';
import './App.css';


class App extends Component{
  render(){
    return (
      <form className="formulario">
        <div className="logo-usac">
          <img className="logo" src={logoUSAC}></img>
        </div>
          <div className="conten">
              <div className="input">
                  <input type="text" name="RegistroAcademico" placeholder="Registro Academico" required />
              </div>
              <div className="input">
                  <input type="text" name="Nombre"  placeholder="Nombre" required></input>
              </div>
              <div className="input">
                  <input type="text" name="Apellido" placeholder="Apellido" required></input>
              </div>
              <div className="input">
                  <input type="password" name="Contraseña" placeholder="Contraseña" required></input>
              </div>
              <div className="input">
                  <input type="email" name="CorreoElectronico" placeholder="Correo Electronico" required></input>
              </div>
              <input type="submit" value="Registrarse" class="button"></input>
          </div>
        </form>
    );
  }
}

export default App;
