import React, { Component } from "react";
import "./Joke.css";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const color = vote => {
      if (vote <= 0) {
        return { border: "red 2px solid" };
      } else if (vote <= 3) {
        return { border: "orange 2px solid" };
      } else if (vote <= 6) {
        return { border: "yellow 2px solid" };
      } else if (vote <= 9) {
        return { border: "lightgreen 2px solid" };
      }
    };
    return (
      <div className="Joke">
        <div className="Joke-button">
          <img
            src="https://img.icons8.com/windows/32/000000/circled-chevron-down--v1.png"
            alt="Up vote"
            className="up-button Joke-button-vote"
            onClick={this.props.upVote}
          />
          <div style={color(this.props.votes)}>
            <p>{this.props.votes}</p>
          </div>
          <img
            src="https://img.icons8.com/windows/32/000000/circled-chevron-down--v1.png"
            alt="Down Vote"
            className="Joke-button-vote down"
            onClick={this.props.downVote}
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
