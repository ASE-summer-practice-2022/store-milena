import React from 'react';
import ToDo from './ToDo';
import AddTodo from "./AddToDo";

const ToDoList = ({toDoList, setToDoList}: any) => {

    const completeTask = (index: any) => {
        const newTasks = [...toDoList];
        let indexTrue = toDoList.findIndex((e: any, i: number, a: object) => e.id === index)
        newTasks[indexTrue].complete = !newTasks[indexTrue].complete;
        setToDoList(newTasks);
    };

    const addTask = (taskName: any) => {
        const newTasks = [...toDoList];
        newTasks.push({id: newTasks.length + 1, task: taskName, complete: false});
        setToDoList(newTasks);
    };

    const deleteTask = (index: any) => {
        const newTasks = [...toDoList];
        let indexTrue = toDoList.findIndex((e: any, i: number, a: object) => e.id === index)
        newTasks.splice(indexTrue, 1);
        setToDoList(newTasks);
    };

    return (
        <div>
            {toDoList.map((todo: any) => {
                return (
                    <ToDo todo={todo} completeTask={completeTask}  deleteTask={deleteTask}/>
                )
            })}
            <AddTodo addTask={addTask}/>
        </div>
    );
};

export default ToDoList;