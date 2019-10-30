import React from "react";

function TodoItem(props){
    const changedStyle = {
        fontStyle : 'italic',
        textDecorationLine : 'line-through'
    }
    return (
        <div className = "todo-item">
            <input 
                type="checkbox" 
                checked={props.obj.completed} 
                onChange={() => props.handleChange(props.obj.id)}
            />
            <p style = {props.obj.completed ? changedStyle : null}>{props.obj.test}</p>
        </div>
    )
};

export default TodoItem;
    