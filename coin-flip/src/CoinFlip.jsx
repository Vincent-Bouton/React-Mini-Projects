import React, { Component } from "react";

class CoinFlip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flip: 0,
      tail: 0,
      head: 0,
      image: "https://tinyurl.com/react-coin-heads-jpg"
    };
    this.flipCoin = this.flipCoin.bind(this);
  }
  flipCoin() {
    this.setState(prevFlip => ({ flip: prevFlip.flip + 1 }));
    const rdm = Math.floor(Math.random() * 2) + 1;
    if (rdm === 1) {
      this.setState(prevFlip => ({
        head: prevFlip.head + 1,
        image: "https://tinyurl.com/react-coin-heads-jpg"
      }));
    } else {
      this.setState(prevFlip => ({
        tail: prevFlip.tail + 1,
        image: "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg"
      }));
    }
  }
  render() {
    return (
      <div>
        <h1>Let's flip a coin</h1>
        <img src={this.state.image} alt="" />
        <button onClick={this.flipCoin}>FLIIIP MEE</button>
        <p>
          flip = {this.state.flip} Head = {this.state.head} Tails =
          {this.state.tail}
        </p>
      </div>
    );
  }
}

export default CoinFlip;
