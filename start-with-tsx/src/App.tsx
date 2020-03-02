import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Contact from "./Components/Contact";

function App() {
  const HomeProps = {
    firstName: "Vincent"
  };
  return (
    <div>
      <Header />
      <Route exact path={"/"} render={() => <Home {...HomeProps} />} />
      <Route exact path={"/contact"} render={() => <Contact />} />
    </div>
  );
}

export default App;
