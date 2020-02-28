import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/About" component={About} />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
