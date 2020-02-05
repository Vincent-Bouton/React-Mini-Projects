import React from "react";
import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <div className="App">
      <Lottery maxNum={50} maxBalls={5} />
      <Lottery title="Mini Daily" maxNum={12} maxBalls={2} />
    </div>
  );
}

export default App;
