import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Pages/Login';
import Registrar from '../Pages/Registrar';
import Recuperar from '../Pages/RecuperarContra';
import PagInicial from '../Pages/PaginaInicial';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/registrar" component={Registrar}/>
                <Route exact path="/recuperar" component={Recuperar}/>
                <Route exact path="/:user" component={ PagInicial}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;