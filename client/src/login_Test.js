import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios';

function App() {
  //Arrays donde se guardan el informacion del base de datos para comparar o modificar
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [usuarios, setUsuarios] = useState([]);//Testing purposes - can be removed

  const [newContrasena, setNewContrasena] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  //API calls que modifican los datos en el base
  useEffect(() => {//Pulls initial data from sql database into an array
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response.data);
      setUsuarios(response.data)
    });
  }, []);

  const submitLogin = () => {//INSERT statement updates sql database and updates list/array shown in real time, Register User
    Axios.post("http://localhost:3001/api/insert", {
      usuario: usuario,
      contrasena: contrasena
    });

    setUsuarios([...usuarios,//Agrega a la lista que aparece de Usuarios
    { Carnet: usuario, Nombres: contrasena },
    ]);
  };

  const deleteUser = (user) => {//DELETE statement updates sql database and updates list/array shown in real time
    Axios.delete(`http://localhost:3001/api/delete/${user}`);
  };

  const updateUser = (user) => {//DELETE statement updates sql database and updates list/array shown in real time
    Axios.put("http://localhost:3001/api/update", {
      usuario: user,
      contrasena: newContrasena,
    });
    setNewContrasena("");
  };

  const test1 = () => {//test1 login
    Axios.post(`http://localhost:3001/api/login/${usuario}`).then(
      (response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message)
        } else {
          setLoginStatus(response.data[0].Nombres)
        }
      });
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
        <button onClick={test1}>test1</button>

        <div>
          <h1>{loginStatus}</h1>
        </div>

        {usuarios.map((val) => {
          return (
            <div className="card">
              <h1>{val.Carnet} </h1>
              <p>{val.Nombres}</p>

              <button onClick={() => { deleteUser(val.Carnet) }}>Delete</button>
              <input type="text" id="updateInput" onChange={(e) => {
                setNewContrasena(e.target.value);
              }} />
              <button onClick={() => { updateUser(val.Carnet) }}>Update</button>
            </div>//Funcion que muestra el informacion del base de datos.
          )
        })}
      </div>
    </div >
  );
}

export default App;