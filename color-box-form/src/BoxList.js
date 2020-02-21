import React, { Component } from "react";
import NewboxForm from "./NewBoxForm";
import Box from "./Box";
import uuid from "uuid/v4";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box: []
    };
    this.newBox = this.newBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }
  newBox(width, height, color) {
    this.setState(ele => {
      return {
        box: [
          ...ele.box,
          { width: width, height: height, color: color, id: uuid() }
        ]
      };
    });
  }
  removeBox(boxId) {
    this.setState(prevState => ({
      box: prevState.box.filter(elem => elem.id !== boxId)
    }));
  }

  render() {
    return (
      <div>
        <h1>HELLO</h1>
        <NewboxForm newBox={this.newBox} />
        {this.state.box.map(elem => {
          return (
            <Box
              key={uuid()}
              id={elem.id}
              height={elem.height}
              width={elem.width}
              color={elem.color}
              removeBox={this.removeBox}
            />
          );
        })}
      </div>
    );
  }
}

export default BoxList;
