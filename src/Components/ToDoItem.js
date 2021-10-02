import React, { Component } from "react";
import PropTypes from 'prop-types';

export class ToDoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todoP.completed ? 'line-through' : 'none',
            display: this.props.todoP ? 'block' : 'none'
        }
    }

    thisVar = 'this is from ToDoItem';

    componentDidMount() {
        console.log(`${this.props.todoP.title} mounted `);
    };
    componentWillUnmount() {
        console.log(`${this.props.todoP.title} unmounted `);
    };

    render () {
        const { id, title } = this.props.todoP;
        
        

        return (
            <div style={this.getStyle()}>
                {this.props.todoP ? 
                <p>
                    {/* In order to set set state of parent component, we have to climb */}
                    {/* the component hierarchy by using state seting function passed as prop */}
                    <input  onChange={ this.props.markComplete.bind(this, id) } 
                            type="checkbox"/> {' '} 
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} className="remove-task"> 
                        x
                    </button>
                </p>
                : null }
            </div>
        )
    }
}

// PropTypes
ToDoItem.propTypes = {
    todoP: PropTypes.object.isRequired
}

const btnStyle = {
    
}

export default ToDoItem;