import React, { Component } from "react";

class RandomNum extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.rdmNum = this.rdmNum.bind(this);
  }
  rdmNum(e) {
    this.setState({ num: Math.floor(Math.random() * this.props.maxNum + 1) });
  }
  render() {
    return (
      <div>
        <h2>The random number is : {this.state.num}</h2>
        {this.state.num === 7 ? (
          <h2>You Win !</h2>
        ) : (
          <button onClick={this.rdmNum}>Click</button>
        )}
      </div>
    );
  }
}

export default RandomNum;
