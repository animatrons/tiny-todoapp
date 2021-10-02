import React, { Component } from 'react'

class AddToDo extends Component {
    state = {
        title: ''
    }
    // In form components:
    // each state prop must have an eq input field with it's 'name' prop set to the state prop name 
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render () {
        return (
          <form onSubmit={this.onSubmit} style={{ display: 'flex'} }>
            <input  type="text" 
                    name="title" 
                    value= {this.state.title}
                    onChange= {this.onChange}
                    required= "required"
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add todo..."/>
            <input  type="submit" 
                    value="Submit" 
                    className="btn"
                    style={{flex: '1'}}/>
          </form>
        );
    }
}

export default AddToDo;