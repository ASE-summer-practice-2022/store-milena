import React, { useState } from 'react';
import data from "./data/data.json";
import CRUD from "./crud";
import Context from "./context/context";

//components
import Header from "./components/common/Header";
import { ProductList } from "./components/Pages/ProductList";

import './styles/App.scss';

function App(){
    const [ CardStore, setCardStore ] = useState(data);

    const newCRUD = new CRUD(CardStore,setCardStore);

    return (
        <>
            <Context.Provider value={{newCRUD}}>
                <div className="App">
                    <Header />
                </div>
            </Context.Provider>
        </>
    );
}

export default App;
