import React, { Component } from "react";
import "./App.css";
import RandomNum from "./RandomNum";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RandomNum maxNum={10} />
      </div>
    );
  }
}

export default App;
