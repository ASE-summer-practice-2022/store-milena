import React from 'react';

export default class CRUD {
    CardStore: any;
    setCardStore: any;

    constructor(CardStore: any, setCardStore: any) {
        this.CardStore = CardStore;
        this.setCardStore = setCardStore;
    }

    updateTask(index: any) {
        const newTasks = [...this.CardStore];
        let indexTrue = this.CardStore.findIndex((e: any, i: number, a: object) => e.id === index)
        newTasks[indexTrue].complete = !newTasks[indexTrue].complete;
        this.setCardStore(newTasks);
    }

    addTask(taskName: any) {
        const newTasks = [...this.CardStore];
        newTasks.push({id: newTasks.length + 1, name: taskName, complete: false});
        this.setCardStore(newTasks);
    }

    deleteTask(index: any) {
        const newTasks = [...this.CardStore];
        let indexTrue = this.CardStore.findIndex((e: any, i: number, a: object) => e.id === index)
        newTasks.splice(indexTrue, 1);
        this.setCardStore(newTasks);
    }
}