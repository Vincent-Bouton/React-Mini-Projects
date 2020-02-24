import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, todo: this.props.todo };
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleClickSave = this.handleClickSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickDone = this.handleClickDone.bind(this);
  }
  handleClickDelete() {
    this.props.removeTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ editing: !this.state.editing });
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleClickSave(evt) {
    this.props.editTodo(this.state.todo, this.props.id);
    this.toggleForm();
  }
  handleClickDone() {
    this.props.doneTask(this.props.id);
  }
  render() {
    let result;
    if (this.state.editing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form">
            <input
              value={this.state.todo}
              onChange={this.handleChange}
              name="todo"
            />
            <button type="button" onClick={this.handleClickSave}>
              Save
            </button>
          </form>
        </div>
      );
    } else {
      result = (
        <li className="Todo">
          <div onClick={this.handleClickDone}>
            <p
              className={this.props.done ? "Todo-task completed" : "Todo-task"}
            >
              {this.props.todo}
            </p>
          </div>
          <div className="Todo-buttons">
            <button onClick={this.toggleForm} className="">
              <i className="fa fa-pen"></i>
            </button>
            <button onClick={this.handleClickDelete}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      );
    }
    return result;
  }
}

export default Todo;
