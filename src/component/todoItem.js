import React from 'react'

function TodoItem(props) {
    console.log('props-TodoItem-->', props);
    const completedStyles = {
        color: '#cdcdcd',
        textDecoration: 'line-through',
        fontStyle: 'italic'
    }
        return (
        <div className='todo-items'>
            <input
                type='checkbox'
                checked={props.todoItem.completed} 
                onChange={() => props.handleChange(props.todoItem.id)}></input>
                {
                    props.todoItem.completed ?
                    <p style={completedStyles}> {props.todoItem.text} </p>
                    : <p style={{color: props.todoItem.text ? 'black' : 'gray' }}>
                        {props.todoItem.text || 'None'}
                    </p>
                }
        </div>
        )
 }

export default TodoItem;
