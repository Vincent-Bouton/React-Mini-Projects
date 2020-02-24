import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.removeBox(this.props.id);
  }
  render() {
    const styleForBox = {
      height: this.props.height + "px",
      width: this.props.width + "px",
      backgroundColor: this.props.color,
      margin: "30px auto"
    };
    return (
      <div>
        <div style={styleForBox}></div>
        <button onClick={this.handleClick}>Remove Box</button>
      </div>
    );
  }
}

export default Box;
