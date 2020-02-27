import React, { Component } from "react";
import "./Joke.css";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Joke">
        <div className="Joke-button">
          <img
            src="https://img.icons8.com/windows/32/000000/circled-chevron-down--v1.png"
            alt="Up vote"
            className="Joke-button-vote up"
          />
          <div>
            <p>{this.props.votes}</p>
          </div>
          <img
            src="https://img.icons8.com/windows/32/000000/circled-chevron-down--v1.png"
            alt="Down Vote"
            className="Joke-button-vote down"
          />
        </div>
        <div className="Joke-text">
          <p>{this.props.joke}</p>
        </div>
      </div>
    );
  }
}

export default Jokes;
