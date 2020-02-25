import React, { Component } from "react";
import "./Card.css";
import Axios from "axios";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    let rot = Math.random() * 90 - 45;
    this._transform = `translate(${xPos}px,${yPos}px) rotate(${rot}deg)`;
  }
  render() {
    return (
      <img
        className="Card"
        style={{ transform: this._transform }}
        src={`https://deckofcardsapi.com/static/img/${this.props.id}.png`}
      />
    );
  }
}

export default Card;
