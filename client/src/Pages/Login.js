import React, { useEffect, useState } from 'react';
import logoUSAC from '../img/logo-usac-png.png';
import Axios from 'axios';
import '../EstilosCSS/App.css';
import { Link, useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();

    const [RegistroAcademico, setUsuario] = useState('');
    const [Contrasena, setContrasena] = useState('');
    const [login, setLogin] = useState('');

    useEffect(() => {
        Axios.get("http://localhost:3001/api/get").then((response) => {
            console.log(response.data);
        });
    }, []);

    const peticionPost = () => {
        Axios.post(`http://localhost:3001/api/login/${RegistroAcademico}`, {
            Contrasena: Contrasena
        }).then((response) => {
            if (response.data.message) {
                setLogin('false');
                setUsuario('');
                setContrasena('');
            } else {
                history.push(`/${RegistroAcademico}`);
                setLogin('true');
                setUsuario('');
                setContrasena('');
            }
        });
    };

    return (
        <form className="formulario" >
            <h1>{login}</h1>
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
                        onChange={(e) => { setUsuario(e.target.value) }}
                    />
                </div>
                <div className="input">
                    <input
                        type="password"
                        name="Contrasena"
                        placeholder="Contraseña"
                        required
                        onChange={(e) => { setContrasena(e.target.value) }}
                    />
                </div>
                <button className="button" onClick={peticionPost}>Login</button>
                <p>Se te olvido la contrasena? <Link to='/recuperar' className="link">Recuperar Contrasena</Link></p>
                <p>No tienes una cuenta? <Link to='/registrar' className="link">Crear Cuenta</Link></p>
            </div>
        </form>
    );
}

export default Login;