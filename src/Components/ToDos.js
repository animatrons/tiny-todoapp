import React, { Component } from "react";
import PropTypes from 'prop-types';

import ToDoItem from "./ToDoItem";

class ToDos extends Component {
  render() {
    return this.props.todos.map((todo) => (
       <ToDoItem markComplete={this.props.markComplete} key={todo.id} todoP={todo}/>
    ));
  }
}

// PropTypes
ToDos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default ToDos;
