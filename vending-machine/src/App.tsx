import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import VendingMachine from "./Components/VendingMachine";
import Soda from "./Components/Soda";
import Header from "./Components/Header";
import Chips from "./Components/Chips";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path={"/"} component={VendingMachine} />
      <Route exact path={"/soda"} component={Soda} />
      <Route exact path={"/chips"} component={Chips} />
    </div>
  );
}

export default App;
