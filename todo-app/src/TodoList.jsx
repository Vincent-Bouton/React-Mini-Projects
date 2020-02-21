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
    this.doneTask = this.doneTask.bind(this);
  }
  submitTodo(tar) {
    this.setState(st => {
      return {
        todoList: [...st.todoList, { todo: tar, id: uuid(), done: false }]
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
  doneTask(todoId) {
    const updateTodo = this.state.todoList.map(elem => {
      if (elem.id === todoId) {
        return { ...elem, done: !elem.done };
      }
      return elem;
    });
    this.setState({ todoList: updateTodo });
  }
  render() {
    return (
      <div className="TodoList">
        <div>
          <h1>
            Todo List<span>A simple React Todo List App</span>
          </h1>
        </div>
        <ul>
          {this.state.todoList.map(elem => {
            return (
              <Todo
                todo={elem.todo}
                key={uuid()}
                id={elem.id}
                removeTodo={this.removeTodo}
                editTodo={this.editTodo}
                edit={elem.edit}
                doneTask={this.doneTask}
                done={elem.done}
              />
            );
          })}
        </ul>
        <NewTodoForm submitTodo={this.submitTodo} />
      </div>
    );
  }
}

export default TodoList;
