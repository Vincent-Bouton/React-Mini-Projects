import React, { Component } from "react";
import "./Card.css";
import Axios from "axios";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img
          src={`https://deckofcardsapi.com/static/img/${this.props.id}.png`}
        />
      </div>
    );
  }
}

export default Card;
