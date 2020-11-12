import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Perfil from '../Perfil';
import AgregarCursos2 from '../AgregarCursos2.js';
import ModificarDatos from '../ModificarDatos.js';
import VerPensum from '../VerPensum.js';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/Perfil" exact render={() => <Perfil />} />
                <Route path="/Perfil/VerPensum" exact render={() => <VerPensum />}/>
                <Route path="/Perfil/ModificarDatos" exact render={() => <ModificarDatos />}/>
                <Route path="/Perfil/AgregarCursos2" exact render={() => <AgregarCursos2 />}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;