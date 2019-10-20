import React from "react";

function TodoItem(props){
    return (
        <div className = "todo-item">
            <input 
                type="checkbox" 
                checked={props.obj.completed} 
                onChange={() => props.handleChange(props.obj.id)}
            />
            <p>{props.obj.test}</p>
        </div>
    )
};

export default TodoItem;
    