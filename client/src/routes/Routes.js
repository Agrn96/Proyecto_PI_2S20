import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Pages/Login';
import Registrar from '../Pages/Registrar';
import Recuperar from '../Pages/RecuperarContra';
import PantallaInicial from '../Pages/PantallaInicial';
import Comentarios from '../Pages/Comentarios';
import Perfil from '../Perfil/Perfil';
import AgregarCursos2 from '../Perfil/AgregarCursos2';
import ModificarDatos from '../Perfil/ModificarDatos';
import VerPensum from '../Perfil/VerPensum';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/registrar" component={Registrar} />
                <Route exact path="/recuperar" component={Recuperar} />
                <Route exact path="/:user" component={PantallaInicial} />
                <Route path="/:user/pub/:idPub" exact render={() => <Comentarios />} />
                <Route path="/:user/Perfil" exact render={() => <Perfil />} />
                <Route path="/Perfil/VerPensum" exact render={() => <VerPensum />}/>
                <Route path="/Perfil/ModificarDatos" exact render={() => <ModificarDatos />}/>
                <Route path="/Perfil/AgregarCursos2" exact render={() => <AgregarCursos2 />}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;