import React, { useState } from 'react';
import data from "./data/data.json";
import CRUD from "./crud";
import Context from "./context/context";

//components
import Header from "./components/common/Header";
import ToDoList from "./components/todo/ToDoList";

import './styles/App.scss';

function App(){
    const [ toDoList, setToDoList ] = useState(data);

    const newCRUD = new CRUD(toDoList,setToDoList);

    return (
        <Context.Provider value={{newCRUD}}>
        <div className="App">
            <Header />
            <ToDoList/>
        </div>
        </Context.Provider>

    );
}

export default App;
