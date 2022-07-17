import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CardList from "./components/CardList";
import Basket from "./components/Pages/Basket";
import ItemPage from "./components/Pages/ItemPage";

export default function RoutesPaths() {
    return (
        <div>
            <Routes>
                <Route path="/" element={ <CardList /> } />
                <Route path="/Basket" element={ <Basket /> } />
                <Route path="/ItemPage/:id" element={<ItemPage />} />
            </Routes>
        </div>
    );
}

