import React, { Component } from "react";
import "./Ball.css";

class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="Ball">{this.props.num}</div>;
  }
}

export default Ball;
