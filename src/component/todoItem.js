import React from 'react'

function TodoItem(props) {
    console.log(props);
    return(
        <div className='todo-items'>
            <input type='checkbox' defaultChecked={props.todoItem.completed} ></input>
            <p style={{color: props.todoItem.text ? 'black' : 'gray' }}>{props.todoItem.text || 'None'}</p>
        </div>
    )
}

export default TodoItem;