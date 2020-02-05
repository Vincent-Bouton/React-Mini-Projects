import React from "react";
import "./App.css";
import RollDice from "./RollDice";

const App = () => {
  return (
    <div className="App">
      <RollDice numDice={6} />
    </div>
  );
};

export default App;
