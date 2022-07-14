import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CardList from './components/CardList';
import { Basket } from './components/Pages/Basket';
import { ItemPage } from './components/Pages/ItemPage';


export default(
    <Route path="/" element={<CardList />} >
        <Route path="/basket" element={<Basket />} />
        <Route path="/ItemPage" element={<ItemPage />} />
        {/*<Route path="" component={} />*/}
    </Route>
);

