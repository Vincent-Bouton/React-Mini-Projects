import React, { Component } from "react";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import uuid from "uuid/v4";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todoList: [] };
    this.submitTodo = this.submitTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }
  submitTodo(tar) {
    this.setState(st => {
      return {
        todoList: [...st.todoList, { todo: tar, id: uuid() }]
      };
    });
  }
  removeTodo(todoId) {
    this.setState(st => ({
      todoList: st.todoList.filter(elem => elem.id !== todoId)
    }));
  }
  editTodo(task, todoId) {
    const updateTodo = this.state.todoList.map(elem => {
      if (elem.id === todoId) {
        return { ...elem, todo: task };
      }
      return elem;
    });
    this.setState({ todoList: updateTodo });
  }
  render() {
    return (
      <div>
        <div>
          <h1>Todo List</h1>
          <p>A simple React Todo List App</p>
        </div>
        <div>
          {this.state.todoList.map(elem => {
            return (
              <Todo
                todo={elem.todo}
                key={uuid()}
                id={elem.id}
                removeTodo={this.removeTodo}
                editTodo={this.editTodo}
                edit={elem.edit}
              />
            );
          })}
        </div>
        <NewTodoForm submitTodo={this.submitTodo} />
      </div>
    );
  }
}

export default TodoList;
