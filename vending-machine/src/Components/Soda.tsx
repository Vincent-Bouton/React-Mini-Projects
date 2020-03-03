import React, {Component} from 'react';
import './Soda.css'
interface SodaState {}
interface SodaProps {}
class Soda extends Component<SodaProps, SodaState> {
  constructor(props:SodaProps) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Soda;