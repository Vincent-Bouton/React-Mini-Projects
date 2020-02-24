import React, { Component } from "react";
import "./Cards.css";
import axios from "axios";
import Card from "./Card";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let newDeck;
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/").then(deck => {
      newDeck = deck;
      console.log(newDeck);
    });
  }
  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
}

export default Cards;
