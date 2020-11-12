import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from "./Pagina_Principal/About";
import Profile from "./Pagina_Principal/Profile";
import PantallaInicial from "./PantallaInicial";
import Comentarios from "./Comentarios";

function Routes() {
    return (
        <>

            <Router>
                <ul id="navBar">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/4/4a/Usac_logo.png"} alt={"Usac_Logo.png"} id='logo'/>
                    <li className="links"> <Link to="/">Home</Link></li>
                    <li className="links"> <Link to="/about">About</Link></li>
                    <li className="links"> <Link to="/profile">Profile</Link></li>
                </ul>
                <Switch>
                    <Route path="/" exact render={() => <PantallaInicial />} />
                    <Route path="/about" exact render={() => <About />} />
                    <Route path="/profile" exact render={() => <Profile />} />
                    <Route path="/pub/:idPub" exact render={() => <Comentarios />} />
                </Switch>
            </Router>
        </>
    )
}
export default Routes
