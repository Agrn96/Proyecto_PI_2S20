import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Registrar from './Pages/Registrar';
import Recuperar from './Pages/RecuperarContra';
import Routes from './routes/Routes'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);


