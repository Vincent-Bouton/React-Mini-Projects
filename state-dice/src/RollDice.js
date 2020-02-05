import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { diceOne: 1, diceTwo: 1, diceThree: 1, rolling: false };
    this.randomDice = this.randomDice.bind(this);
  }
  randomDice() {
    this.setState({
      diceOne: Math.floor(Math.random() * 6),
      diceTwo: Math.floor(Math.random() * 6),
      diceThree: Math.floor(Math.random() * 6),
      rolling: true
    });

    setTimeout(() => this.setState({ rolling: false }), 1000);
  }
  render() {
    const numbers = ["one", "two", "three", "four", "five", "six"];
    return (
      <div>
        <div className="RollDice-die">
          <Die num={numbers[this.state.diceOne]} shaking={this.state.rolling} />
          <Die num={numbers[this.state.diceTwo]} shaking={this.state.rolling} />
          <Die
            num={numbers[this.state.diceThree]}
            shaking={this.state.rolling}
          />
        </div>
        <button
          className="RollDice-button"
          onClick={this.randomDice}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "Rolling" : "Roll Dice !"}
        </button>
      </div>
    );
  }
}

export default RollDice;
