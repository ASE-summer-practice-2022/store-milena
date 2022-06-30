import React, { useState } from 'react';
import data from "../data/data.json";
//components
import Header from "./Header";
import ToDoList from "./ToDoList";

import '../styles/App.css';

function App() {
    const [ toDoList, setToDoList ] = useState(data);

    return (
        <div className="App">
            <Header />
            <ToDoList toDoList={toDoList} setToDoList={setToDoList}/>
        </div>
    );
}

export default App;
