import React, { Component } from "react";
import "./Home.css";
interface HomeProps {
  firstName?: string;
}
class Home extends Component {
  constructor(props: HomeProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>HOME</h1>
      </div>
    );
  }
}

export default Home;
