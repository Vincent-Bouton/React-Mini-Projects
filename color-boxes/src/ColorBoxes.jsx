import React, { Component } from "react";
import Boxes from "./Boxes";
import "./ColorBoxes.css";

class ColorBoxes extends Component {
  static defaultProps = {
    numBox: 18,
    color: [
      "#32a852",
      "#3261a8",
      "#a87532",
      "#a83232",
      "#a8a232",
      "#32a84c",
      "#32a883",
      "#328ba8",
      "#5932a8",
      "#8e32a8",
      "#a83292"
    ]
  };
  constructor(props) {
    super(props);
    this.state = { boxes: Array.from({ length: this.props.numBox }) };
  }
  render() {
    return (
      <div className="ColorBoxes">
        {this.state.boxes.map(() => {
          return <Boxes color={this.props.color} />;
        })}
      </div>
    );
  }
}

export default ColorBoxes;
