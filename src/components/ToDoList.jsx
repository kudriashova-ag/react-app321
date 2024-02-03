import React, { useState } from "react";
import "./ToDoList.css";
import { todolist } from "../data/todolist";
import ToDoItem from "./ToDoItem";
import { nanoid } from "nanoid";

const ToDoList = () => {
  const [newTitle, setNewTitle] = useState("");
  const [tasks, setTasks] = useState(todolist);

  const addHandler = () => {
    setTasks([
      ...tasks,
      {
        id: nanoid(),
        title: newTitle,
        done: false,
      },
    ]);
    setNewTitle("");
  };

  const deleteHandler = (id) => {
    const newTasks = tasks.filter((task) => task.id != id);
    setTasks(newTasks);
    };
    
    const toggleDone = (id) => {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done }
            }
            return task;
        });

        setTasks(newTasks);
    }

  return (
    <>
      <h1 className="primary">Todo</h1>

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
