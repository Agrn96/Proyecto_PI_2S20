import { render } from '@testing-library/react'
import React from 'react'
import { Component } from 'react'

class AgregarCurso extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombreCurso: '',
            notaObtenida: ''
        }
    }

    syncNombreCurso(nombreCurso){
        this.setState({
            nombreCurso: nombreCurso
        })
    }

    syncNotaObtenida(notaObtenida){
        this.setState({
            notaObtenida: notaObtenida
        })
    }

    render() {
        return(
            <form>
                <label>Nombre del Curso</label>
                <input 
                    onChange={(ev)=> {this.syncNombreCurso(ev.target.value)}}
                    type="text" value={this.state.nombreCurso} 
                    placeholder="Ingrese el nombre del curso"></input>
                
                <label>Calificación Obtenida</label>
                <input 
                    onChange={(ev)=> {this.syncNotaObtenida(ev.target.value)}}
                    type="text" value={this.state.notaObtenida} 
                    placeholder="Ingrese la nota del curso"></input>
                
                <div>
                    <input type="submit" value="Agregar"></input>
                </div>
            </form>
        )
    }
}
