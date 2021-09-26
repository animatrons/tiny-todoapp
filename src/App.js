import React, { Component } from 'react';
import ToDos from './Components/ToDos'

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take ou trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Mow the beard',
        completed: false
      }
    ]
  }

  thisVar = 'this is from app'

  // Using arrow function, the 'this' will always be the context in which the 
  // function was first declared, using bind() later won't change the context, 
  // but can change the argument (in ToDoItem.js)
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      };
      

      return todo;
    }) });

    console.log(this.thisVar + " " + id);
  }

  // Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div className="App container">
        <ToDos  markComplete={this.markComplete}  
                todos={this.state.todos}
                delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
