import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <i
        className={`fas fa-dice-${this.props.num} fa-10x Die ${
          this.props.shaking ? "shaking" : 0
        }`}
      ></i>
    );
  }
}

export default Die;
