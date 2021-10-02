import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ToDos from './Components/ToDos'
import Header from './Components/layout/Header'
import AddToDo from './Components/AddToDo'
import About from "./Components/pages/About";
import { axios } from 'axios';

import './App.css';

const fetchTodos = async () => {
  const res = await fetch('https://6097fa09e48ec00017873337.mockapi.io/tasks/todos')
  const data = res.json();
  return data;
}

const postTodo = async (todo) => {
  const raw = await 
    fetch('https://6097fa09e48ec00017873337.mockapi.io/tasks/todos', 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
  const resp = await raw.json();

  console.log(resp);
}

const deleteTodo = async (id) => {
  const raw = await 
    fetch('https://6097fa09e48ec00017873337.mockapi.io/tasks/todos/' + id, 
    {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    });
  const resp = await raw.json();
  console.log(raw);
  console.log(resp);
}

class App extends Component {
  state = {
    todos: [
      // {
      //   "id": 1,
      //   "title": "Take ou trash",
      //   "completed": false
      // },
      // {
      //   "id": 2,
      //   "title": "Dinner with wife",
      //   "completed": false
      // },
      // {
      //   "id": 3,
      //   "title": "Mow the beard",
      //   "completed": false
      // },
      // {
      //   "id": 4,
      //   "title": "Find keys",
      //   "completed": false
      // },
      // {
      //   "id": 5,
      //   "title": "Open the gate to the ancient ruins",
      //   "completed": false
      // },
      // {
      //   "id": 6,
      //   "title": "Kill the dragon",
      //   "completed": false
      // }
    ]
  }


 
  async componentDidMount() {
    const data = await fetchTodos();
    console.log(data);
    this.setState( { todos: data} )
  }

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

    deleteTodo(id)
      .then(() => {
        console.log(id);
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
      })    
  }

  // Add todo
  addTodo = (title) => {
    var todos = this.state.todos;
    var lastId = todos[todos.length - 1].id;

    const newTodo = {
      id: lastId + 1,
      title: title,
      completed: false
    }

    postTodo(newTodo)
      .then(() => {
        this.setState({ todos: [ ...this.state.todos, newTodo] });
        console.log(title + " added to todos:");
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddToDo addTodo={this.addTodo} />
                  <ToDos
                    markComplete={this.markComplete}
                    todos={this.state.todos}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <div className="navbar">
              <span>
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </span>
              <span>
                <Link to="/about" className="navbar-link">
                  About
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
