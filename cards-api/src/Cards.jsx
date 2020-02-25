import React, { Component } from "react";
import "./Cards.css";
import axios from "axios";
import Card from "./Card";
import uuid from "uuid/v4";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], deck: "" };
    this.getCard = this.getCard.bind(this);
    console.log("constructor");
  }
  async componentDidMount() {
    let deck = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/"
    );
    this.setState({ deck: deck.data });
  }

  async getCard() {
    try {
      let cardUrl = `https://deckofcardsapi.com/api/deck/${this.state.deck.deck_id}/draw/`;

      let cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error("No card remaining");
      }
      this.setState(prevSt => {
        return { cards: [...prevSt.cards, cardRes.data.cards[0]] };
      });
    } catch (err) {
      alert(err);
    }
  }
  render() {
    console.log("render");
    return (
      <div>
        <button type="button" onClick={this.getCard}>
          Add a new card
        </button>
        <div className="Cards-area">
          {this.state.cards.map(ele => {
            return <Card key={ele.code} id={ele.code} />;
          })}
        </div>
      </div>
    );
  }
}

export default Cards;
