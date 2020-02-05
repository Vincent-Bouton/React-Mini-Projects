import React, { Component } from "react";
import "./Boxes.css";

class Boxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color[
        Math.floor(Math.random() * this.props.color.length)
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      color: this.props.color[
        Math.floor(Math.random() * this.props.color.length)
      ]
    });
  }
  render() {
    console.log(this.props.color);
    return (
      <div
        className="Boxes"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Boxes;
