import React from 'react';

const ToDoItem = ({task}) => {
    return (
        <div>
            <input type="checkbox" defaultChecked={task.done} name="" id="" />
            <span>{task.title}</span>
            <button>Delete</button>
        </div>
    );
}

export default ToDoItem;
