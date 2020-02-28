import React, { Component } from "react";

class NewboxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: "", height: "", color: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit() {
    this.props.newBox(this.state.width, this.state.height, this.state.color);
    this.setState({ width: "", height: "", color: "" });
  }
  render() {
    return (
      <form>
        <label htmlFor="width">Width : </label>
        <input
          type="text"
          id="width"
          name="width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor="height"> Height </label>
        <input
          type="text"
          id="height"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default NewboxForm;
