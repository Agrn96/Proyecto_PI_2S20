import React, { Component } from 'react';
import logoUSAC from '../img/logo-usac-png.png';
import '../EstilosCSS/App.css';
import ReactDOM from 'react-dom';
import Axios from 'axios';


const url ="https://locahost:3000/api/registrar";

class Registrar extends Component{
  state={
      data: [],
      form:{
        RegistroAcademico: '',
        Nombre: '',
        Apellido: '', 
        Contraseña: '',
        CorreoElectronico: ''
      }
    }
  

  handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form)
  }

  iniciar=async()=>{
    window.location.href="./PantallaIniciar";
  }

  login(e){
    ReactDOM.render(
      window.location.href="./Login"
    );
  }
  
  peticionGet=()=>{
    Axios.get(url).then(response=>{
      this.setState({data: response.data});
    });
  }

  peticionPost= async()=>{
      await Axios.post(url, this.state.form).then(response=>{
        this.peticionGet();
      });
  }

  sumbitHandler = e =>{
    //e.preventDefault()
    //console.log(this.state)
    /*Axios.post("https://localhost3001/registrar",{
      Carnet: this.state.form.RegistroAcademico, 
      Nombre: this.state.form.Nombre,
      Apellido: this.state.form.Apellido,
      Contrasena:  this.state.form.Contraseña,
      Correo: this.state.form.CorreoElectronico
      })
      .then(response=>{
        console.log(response);
      })
      .catch(error=>{
        console.log(error);
      });*/
    }
    
  render(){
    const {form} = this.state
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
                  onChange ={this.handleChange}
                  value ={form.RegistroAcademico}
                  />
              </div>
              <div className="input">
                  <input type="text" 
                  name="Nombre"  
                  placeholder="Nombre" 
                  required
                  onChange ={this.handleChange}
                  value= {form.Nombre}
                  />
              </div>
              <div className="input">
                  <input 
                  type="text" 
                  name="Apellido" 
                  placeholder="Apellido" 
                  required 
                  onChange ={this.handleChange}
                  value = {form.Apellido}
                  />
              </div>
              <div className="input">
                  <input 
                  type="password" 
                  name="Contraseña" 
                  placeholder="Contraseña" 
                  required 
                  onChange ={this.handleChange}
                  value = {form.Contraseña}
                  />
              </div>
              <div className="input">
                  <input 
                  type="email" 
                  name="CorreoElectronico" 
                  placeholder="Correo Electronico" 
                  required 
                  onChange ={this.handleChange}
                  value = {form.CorreoElectronico }
                  />
              </div>
              <button type="submit" className="button" onClick={()=>this.peticionPost()}>Registrarse</button>
              <p>Ya tienes una cuenta? <button onClick={this.login.bind(this)}>Iniciar Seccion</button></p>
          </div>
        </form>
    );
  }
}

export default Registrar;
