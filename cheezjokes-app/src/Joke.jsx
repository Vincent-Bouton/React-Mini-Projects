import React, { Component } from "react";
import "./Joke.css";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>{this.props.joke}</p>
      </div>
    );
  }
}

export default Jokes;
