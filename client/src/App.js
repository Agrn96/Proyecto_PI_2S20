import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';

function App() {
  //Arrays donde se guardan el informacion del base de datos para comparar o modificar
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  //API calls que modifican los datos en el base
  useEffect(() => {//Pulls initial data from sql database into an array
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response.data);
      setUsuarios(response.data)
    });
  }, []);

  const submitLogin = () => {//INSERT statement updates sql database and updates list/array shown in real time
    Axios.post("http://localhost:3001/api/insert", {
      usuario: usuario,
      contrasena: contrasena
    });

    setUsuarios([...usuarios,
    { Carnet: usuario, Nombres: contrasena },
    ]);
  };


  //Visual test, cambiar datos para que usamos datos que necesitamos (el var contrasena esta haciendo target al nombre)
  return (
    <div className="App">
      <h1>Login</h1>

      <div className="form">
        <label>Usuario</label>
        <input type="text" name="usuario" onChange={(e) => {
          setUsuario(e.target.value)
        }} />
        <label>Contrasena</label>
        <input type="text" name="contrasena" onChange={(e) => {
          setContrasena(e.target.value)
        }} />

        <button onClick={submitLogin}>Submit</button>

        {usuarios.map((val) => {
          return <h1>Usuarios: {val.Carnet} | Nombres: {val.Nombres}</h1>//Funcion que muestra el informacion del base de datos.
        })}
      </div>
    </div >
  );
}

export default App;