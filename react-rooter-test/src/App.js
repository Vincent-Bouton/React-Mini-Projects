import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact activeClassName={"active-link"} to="/contact">
          Contact
        </NavLink>
        <NavLink exact activeClassName={"active-link"} to="/about">
          About
        </NavLink>
        <NavLink exact activeClassName={"active-link"} to="/">
          Home
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/" render={() => <Home name="Vincent" />} />
      </Switch>
    </div>
  );
}

export default App;
