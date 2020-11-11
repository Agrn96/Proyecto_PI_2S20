import React, { Component } from 'react';
import logoUSAC from '../img/logo-usac-png.png';
import '../EstilosCSS/App.css';

class RecuperarContra extends Component{
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
                  <input type="email" name="CorreoElectronico" placeholder="Correo Electronico" required></input>
              </div>
              <div className="input">
                <input type="email" name="NuevaContra" placeholder="Nueva Contraseña" required/>
            </div>
              <input type="submit" value="Registrarse" class="button"></input>
          </div>
        </form>
    );
  }
}

export default RecuperarContra;
