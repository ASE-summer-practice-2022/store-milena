import React from 'react';

export default class CRUD {
    toDoList: any;
    setToDoList: any;

    constructor(toDoList: any, setToDoList: any) {
        this.toDoList = toDoList;
        this.setToDoList = setToDoList;
    }

    updateTask(index: any) {
        const newTasks = [...this.toDoList];
        let indexTrue = this.toDoList.findIndex((e: any, i: number, a: object) => e.id === index)
        newTasks[indexTrue].complete = !newTasks[indexTrue].complete;
        this.setToDoList(newTasks);
    }

    addTask(taskName: any) {
        const newTasks = [...this.toDoList];
        newTasks.push({id: newTasks.length + 1, name: taskName, complete: false});
        this.setToDoList(newTasks);
    }

    deleteTask(index: any) {
        const newTasks = [...this.toDoList];
        let indexTrue = this.toDoList.findIndex((e: any, i: number, a: object) => e.id === index)
        newTasks.splice(indexTrue, 1);
        this.setToDoList(newTasks);
    }
}