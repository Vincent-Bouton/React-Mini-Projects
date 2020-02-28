import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/contact" component={Contact} />
      <Route path="/About" component={About} />
      <Route path="/Home" component={Home} />
    </div>
  );
}

export default App;
