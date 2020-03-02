import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  const HomeProps = {
    firstName: "Vincent"
  };
  return (
    <div>
      <Header />
      <Route path={"/"} render={() => <Home {...HomeProps} />} />
    </div>
  );
}

export default App;
