import React, { Component } from "react";
import "./JokesList.css";
import Axios from "axios";
import Joke from "./Joke";

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
      jokes.push(res.data.joke);
    }
    this.setState(prevSt => ({
      jokes: [...jokes]
    }));
    console.log(jokes);
  }
  render() {
    return (
      <div>
        <h1>Dad Jokes App</h1>
        <div>
          {this.state.jokes.map(ele => {
            return <Joke joke={ele} />;
          })}
        </div>
      </div>
    );
  }
}

export default JokesList;
