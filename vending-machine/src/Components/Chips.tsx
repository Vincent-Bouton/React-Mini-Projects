import React, {Component} from 'react';
import './Chips.css'
interface ChipsState {}
interface ChipsProps {}
class Chips extends Component<ChipsProps, ChipsState> {
  constructor(props:ChipsProps) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Chips;