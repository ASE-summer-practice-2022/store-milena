//ROUTES
import { Routes, Route, Link } from 'react-router-dom';
import route from '../route';
import { ItemPage } from '../components/Pages/ItemPage';

//MUI
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import React from 'react';
import "../styles/buttonDelete.scss";

export default function CardItem (data: any) {
    return (
        <div className="product-card">
            {/*DESCRIPTION*/}
            <div className="product-info" onClick={() => data.id}>
                <Link className="todoName" to="/ItemPage">{data.product.name}</Link>
                <br/><br/>
                <p className="todoSubstanceName">{data.product.substanceName}</p>
                <p className="todoSubstanceName">{data.product.substanceCode}</p>
            </div>

            {/*BUTTON*/}
            <div className="product-delete">
                <IconButton color="secondary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
                <Routes>
                    <Route path="/ItemPage" element={<ItemPage />} />
                </Routes>
            </div>
        </div>
    );
}
