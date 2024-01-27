import React from 'react';
import './ToDoList.css';
import {todolist} from '../data/todolist'
import ToDoItem from './ToDoItem';

const ToDoList = () => {

    return (
        <>
            <h1 className='primary'>Todo</h1> 
            {todolist.map((task, index) => <div key={task.id}><ToDoItem task={task} /></div>)}
        </>
    );
}


export default ToDoList;