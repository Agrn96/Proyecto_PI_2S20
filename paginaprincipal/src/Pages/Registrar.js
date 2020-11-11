import React, { Component } from 'react';
import logoUSAC from '../img/logo-usac-png.png';
import '../EstilosCSS/App.css';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';

class Registrar extends Component{
  state={
    form:{
      RegistroAcademico: '',
      Nombre: '',
      Apellido: '',
      Contraseña: '',
      CorreoElectronico: '',
      Registrarse: ''
    }
  }

  handleChange=e=>{
    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }

  iniciar=async()=>{
    window.location.href="./PantallaIniciar";
  }

  login(e){
    ReactDOM.render(
      window.location.href="./Login"
    );
  }

  render(){
    return (
      <div className="formulario">
        <div className="logo-usac">
          <img className="logo" src={logoUSAC}></img>
        </div>
          <div className="conten">
              <div className="input">
                  <input 
                  type="text" 
                  name="RegistroAcademico" 
                  placeholder="Registro Academico" 
                  required 
                  onChange ={this.handleChange}
                  />
              </div>
              <div className="input">
                  <input type="text" 
                  name="Nombre"  
                  placeholder="Nombre" 
                  required
                  onChange ={this.handleChange}
                  />
              </div>
              <div className="input">
                  <input 
                  type="text" 
                  name="Apellido" 
                  placeholder="Apellido" 
                  required 
                  onChange ={this.handleChange}
                  />
              </div>
              <div className="input">
                  <input 
                  type="password" 
                  name="Contraseña" 
                  placeholder="Contraseña" 
                  required 
                  onChange ={this.handleChange}
                  />
              </div>
              <div className="input">
                  <input 
                  type="email" 
                  name="CorreoElectronico" 
                  placeholder="Correo Electronico" 
                  required 
                  onChange ={this.handleChange}
                  />
              </div>
              <input type="submit" value="Registrarse" onClick={this.iniciar.bind(this)} class="button" ></input>
              <p>Ya tienes una cuenta? <button onClick={this.login.bind(this)}>Iniciar Seccion</button></p>
          </div>
        </div>
    );
  }
}

export default Registrar;
