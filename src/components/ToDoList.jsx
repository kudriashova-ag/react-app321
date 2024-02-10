import React, { useState, useReducer, useEffect } from "react";
import "./ToDoList.css";
import { todolist } from "../data/todolist";
import ToDoItem from "./ToDoItem";
import todoReducer from "../reducers/todoReducer";

const ToDoList = () => {
  const [newTitle, setNewTitle] = useState("");

  const [tasks, dispatch] = useReducer(todoReducer, []);

  const addHandler = () => {
    dispatch({
      type: "add",
      payload: newTitle,
    });

    setNewTitle("");
  };

  const deleteHandler = (id) => {
    dispatch({
      type: "remove",
      payload: id,
    });
  };

  const toggleDone = (id) => {
    dispatch({
      type: "toggleDone",
      payload: id,
    });
  };

  useEffect(() => {
    let initial = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : todolist;
    dispatch({
      type: "init",
      payload: initial,
    });
  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);





  return (
    <>
      <h1 className="primary">Todo</h1>
      <button onClick={() => dispatch({ type: "clear" })}>Clear all</button>
      <div>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={addHandler}>add</button>
      </div>

      {tasks.map((task, index) => (
        <div key={task.id}>
          <ToDoItem
            task={task}
            deleteHandler={deleteHandler}
            toggleDone={toggleDone}
          />
        </div>
      ))}
    </>
  );
};

export default ToDoList;
