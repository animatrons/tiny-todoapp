import React, { Component } from "react";
import PropTypes from 'prop-types';

import ToDoItem from "./ToDoItem";

class ToDos extends Component {
  render() {
    return this.props.todos.map((todo) => (
       <ToDoItem  markComplete={this.props.markComplete} 
                  key={todo.id} 
                  todoP={todo}
                  delTodo={this.props.delTodo}/>
    ));
  }
}

// PropTypes
ToDos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default ToDos;
