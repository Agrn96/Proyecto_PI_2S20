import React from 'react'

class AgregarCursos extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nombreCurso: '',
            notaCurso: ''
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
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
            </div>
        )
    }
}

export default AgregarCursos