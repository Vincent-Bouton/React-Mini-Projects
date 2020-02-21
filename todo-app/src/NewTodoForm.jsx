import React, { Component } from "react";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit() {
    console.log("coucou");

    this.props.submitTodo(this.state.todo);
    this.setState({ todo: "" });
  }
  render() {
    return (
      <form>
        <label htmlFor="Todo">New Todo</label>
        <input
          value={this.state.todo}
          onChange={this.handleChange}
          id="todo"
          name="todo"
        />
        <button type="button" onClick={this.handleSubmit}>
          Save
        </button>
      </form>
    );
  }
}

export default NewTodoForm;
