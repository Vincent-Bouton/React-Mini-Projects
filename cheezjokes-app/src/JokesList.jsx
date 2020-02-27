import React, { Component } from "react";
import "./JokesList.css";
import Axios from "axios";
import Joke from "./Joke";
import uuid from "uuid/v4";

class JokesList extends Component {
  static defaultProps = {
    numOfJokes: 10
  };

  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }

  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.numOfJokes) {
      let res = await Axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokes.push({ id: uuid(), joke: res.data.joke, votes: 0 });
    }
    this.setState(prevSt => ({
      jokes: [...jokes]
    }));
    console.log(jokes);
  }

  handleVote(id, delta) {
    this.setState(st => ({
      jokes: st.jokes.map(j => {
        return j.id === id ? { ...j, votes: j.votes + delta } : j;
      })
    }));
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://img.icons8.com/emoji/96/000000/rolling-on-the-floor-laughing.png"
            alt="Emoji"
          />
          <button className="JokeList-moreJoke">New Jokes</button>
        </div>
        <div className="JokeList-joke">
          {this.state.jokes.map(ele => {
            return (
              <Joke
                key={ele.id}
                joke={ele.joke}
                votes={ele.votes}
                upVote={() => this.handleVote(ele.id, 1)}
                downVote={() => this.handleVote(ele.id, -1)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default JokesList;
