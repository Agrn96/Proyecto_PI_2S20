import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Perfil from '../Perfil';
import AgregarCursos2 from '../AgregarCursos2';
import ModificarDatos from '../ModificarDatos';
import VerPensum from '../VerPensum';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Perfil}/>
                <Route exact path="/VerPensum" component={VerPensum}/>
                <Route exact path="/ModificarDatos" component={ModificarDatos}/>
                <Route exact path="/AgregarCursos2" component={ AgregarCursos2}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;