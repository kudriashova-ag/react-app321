import React, { useState } from "react";

const ToDoItem = ({ task, deleteHandler, toggleDone }) => {
  const [editing, setEditing] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={task.done}
        onClick={() => toggleDone(task.id)}
      />

      {editing ? (
        <input type="text" onBlur={() => setEditing(false)} />
      ) : (
        <span
          className={task.done ? "done" : ""}
          onClick={() => setEditing(true)}
        >
          {task.title}
        </span>
      )}

      <button onClick={() => deleteHandler(task.id)}>Delete</button>
    </div>
  );
};

export default ToDoItem;
