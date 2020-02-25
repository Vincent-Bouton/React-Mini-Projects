import React, { Component } from "react";
import "./Cards.css";
import axios from "axios";
import Card from "./Card";
import uuid from "uuid/v4";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], deck: "" };
    this.handleClick = this.handleClick.bind(this);
    console.log("constructor");
  }
  componentDidMount() {
    axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/").then(deck => {
      this.setState({ deck: deck.data });
      console.log(deck.data.deck_id);
    });
  }

  handleClick() {
    axios
      .get(
        `https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`
      )
      .then(card => {
        this.setState(prevSt => {
          return { cards: [...prevSt.cards, card.data.cards[0]] };
        });
      });
  }
  render() {
    console.log("render");
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          Add a new card
        </button>
        {this.state.cards.map(ele => {
          return <Card key={ele.code} id={ele.code} />;
        })}
      </div>
    );
  }
}

export default Cards;
