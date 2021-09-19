import React, { Component } from "react";
import PropTypes from 'prop-types';

export class ToDoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todoP.completed ? 'line-through' : 'none'
        }
    }

    thisVar = 'this is from ToDoItem'

    render () {
        const { id, title } = this.props.todoP;
        return (
            <div style={this.getStyle()}>
                <p>
                    {/* In order to set set state of parent component, we have to climb */}
                    {/* the component hierarchy by using state seting function passed as prop */}
                    <input  onChange={ this.props.markComplete.bind(this, id) } 
                            type="checkbox"/> {' '} { title }
                </p>
            </div>
        )
    }
}

// PropTypes
ToDoItem.propTypes = {
    todoP: PropTypes.object.isRequired
}

export default ToDoItem;