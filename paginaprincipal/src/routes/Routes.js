import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Registrar from '../Pages/Registrar';
import Login from '../Pages/Login'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Registrar}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;