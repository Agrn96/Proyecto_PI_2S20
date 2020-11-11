import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.state= {
            RegistroAcademico: '',
            Nombre: '',
            Apellido: '',
            Contraseña: '',
            CorreoElectronico: ''
        };
        this.handleInputChance = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            RegistroAcademico: '',
            Nombre: '',
            Apellido: '',
            Contraseña: '',
            CorreoElectronico: ''
        });
    }

    handleInput(){
        const { value, name} = e.target;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    render(){
        return(
            <form className="formulario">
                <div onSubmit={this.handleSubmit} className="conten">
                    <div className="input">
                        <input type="text" name="RegistroAcademico" placeholder="Registro Academico" onChange={this.handleInput} required />
                    </div>
                    <div className="input">
                        <input type="text" name="Nombre"  placeholder="Nombre" onChange={this.handleInput} required></input>
                    </div>
                    <div className="input">
                        <input type="text" name="Apellido" placeholder="Apellido" onChange={this.handleInput} required></input>
                    </div>
                    <div className="input">
                        <input type="password" name="Contraseña" placeholder="Contraseña" onChange={this.handleInput} required></input>
                    </div>
                    <div className="input">
                        <input type="email" name="CorreoElectronico" placeholder="Correo Electronico" onChange={this.handleInput} required></input>
                    </div>
                    <input type="submit" value="Registrarse" class="button"></input>
                </div>
            </form>
        );
    }
}

export default TodoForm;