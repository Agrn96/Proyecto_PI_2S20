import React from 'react'
import './Estiloss.css'

class ModificarDatos extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            nombres: '',
            apellidos: '',
            registroAcademico:'',
            email:'',
            contrasena:'',
            verificacion: ''
        }
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    save(e){
        this.setState({
            verificacion: 'Se han guardado los cambios'
        })
    }

    render(){
        return(
            <div>
                <div>
                    <label htmlFor="nombres">Nombres</label>
                    <input 
                        value={this.state.nombres}
                        onChange={this.onChange.bind(this)}
                        name="nombres" id="nombres" type="text" />
                </div>
                
                <div>
                    <label htmlFor="apellidos">Apellidos</label>
                    <input 
                        value={this.state.apellidos}
                        onChange={this.onChange.bind(this)}
                        name="apellidos" id="apellidos" type="text" />
                </div>

                <div>
                    <label htmlFor="registroAcademico">Registro Academico</label>
                    <input 
                        value={this.state.registroAcademico}
                        onChange={this.onChange.bind(this)}
                        name="registroAcademico" id="registroAcademico" type="text" />
                </div>

                <div>
                    <label htmlFor="email">Correo electronico</label>
                    <input 
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                        name="email" id="email" type="email" />
                </div>

                <div>
                    <label htmlFor="contrasena">Contrasena</label>
                    <input 
                        value={this.state.contrasena}
                        onChange={this.onChange.bind(this)}
                        name="contrasena" id="contrasena" type="password" />
                </div>

                
                
                <button onClick={this.save.bind(this)}>Guardar Cambios</button>
                <span>{this.state.verificacion}</span>
            </div>
        )
    }
}

export default ModificarDatos