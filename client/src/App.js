import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Pagina_Principal/Home";
import About from "./Pagina_Principal/About";
import Profile from "./Pagina_Principal/Profile";

function App() {
    return (
        <>
        <h1>Cool Navbar</h1>
        <Router>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/profile">Profile</Link>
            <Switch>
                <Route path="/" exact render={() => <Home />} />
                <Route path="/about" exact render={() => <About />} />
                <Route path="/profile" exact render={() => <Profile />} />
            </Switch>
        </Router>
        </>
    )
}

export default App
