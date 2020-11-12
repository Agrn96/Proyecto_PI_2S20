import { render } from '@testing-library/react'
import React from 'react'
import { Component } from 'react'

class ModificarDatos extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombres: '',
            apellidos: '',
            registroAcademico: '',
            email: '',
            contrasena: ''
        }
    }

    syncCambios(value, property){
        let estado = {};
        state[property] = value;
        this.setState(estado);
    }

    render() {
        return(
            <form>
                <label>Nombres</label>
                <input 
                    onChange={(ev)=> {this.syncCambios(ev.target.value, 'nombres')}}
                    type="text" value={this.state.nombres} 
                    placeholder="Ingrese el nombre"></input>
                
                <label>Apellidos</label>
                <input 
                    onChange={(ev)=> {this.syncCambios(ev.target.value, 'apellidos')}}
                    type="text" value={this.state.apellidos} 
                    placeholder="Ingrese el apellido"></input>
                
                <label>Registro Academico</label>
                <input 
                    onChange={(ev)=> {this.syncCambios(ev.target.value, 'registroAcademico')}}
                    type="text" value={this.state.registroAcademico} 
                    placeholder="Ingrese el registro"></input>

                <label>Correo electronico</label>
                <input 
                    onChange={(ev)=> {this.syncCambios(ev.target.value, 'email')}}
                    type="text" value={this.state.email} 
                    placeholder="Ingrese su nuevo email"></input>

                <label>contrasena</label>
                <input 
                    onChange={(ev)=> {this.syncCambios(ev.target.value, 'nombres')}}
                    type="password" value={this.state.contrasena} 
                    placeholder="Ingrese la nueva contrasena"></input>
                
                <div>
                    <input type="submit" value="Agregar"></input>
                </div>
            </form>
        )
    }
}