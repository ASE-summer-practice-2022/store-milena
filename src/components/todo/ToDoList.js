import React from 'react';
import ToDo from './ToDo';
import AddTodo from "./AddToDo";


const ToDoList = ({toDoList, setToDoList}) => {

    const completeTask = index => {
        const newTasks = [...toDoList];
        let index_true = toDoList.findIndex((e, i, a) => e.id === index)
        newTasks[index_true].complete = !newTasks[index_true].complete;
        setToDoList(newTasks);
    };

    const addTask = task_name => {
        const newTasks = [...toDoList];
        newTasks.push({id: newTasks.length, task: task_name, complete: false});
        setToDoList(newTasks);
    };

     const deleteTask = index => {
         const newTasks = [...toDoList];
         let index_true = toDoList.findIndex((e, i, a) => e.id === index)
         newTasks.splice(index_true, 1);
         setToDoList(newTasks);
     };

    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} completeTask={completeTask}  deleteTask={deleteTask}/>
                )
            })}
            <AddTodo addTask={addTask}/>
        </div>
    );
};

export default ToDoList;