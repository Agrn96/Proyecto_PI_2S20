import React from 'react'
import './EstilosPerfil.css'

class AgregarCursos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            codigoCurso: '',
            nombreCurso: '',
            notaCurso: '',
            message: ''
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    save(e){
        this.setState({
            message: 'Se han guardado los cambios'
        })
    }

    render(){
        return(
            <div>
                <label htmlFor="codigoCurso">Codigo del Curso</label>
                <input 
                    value={this.state.codigoCurso}
                    onChange={this.onChange.bind(this)}
                    name="codigoCurso" id="codigoCurso" type="text" />

                <label htmlFor="nombreCurso">Nombre del Curso</label>
                <input 
                    value={this.state.nombreCurso}
                    onChange={this.onChange.bind(this)}
                    name="nombreCurso" id="nombreCurso" type="text" />

                <label htmlFor="notaCurso">Calificacion del Curso</label>
                <input 
                    value={this.state.notaCurso}
                    onChange={this.onChange.bind(this)}
                    name="notaCurso" id="notaCurso" type="text" />

                <button onClick={this.save.bind(this)}>Guardar Cambios</button>
                <span>{this.state.message}</span>
            </div>
        )
    }
}

export default AgregarCursos