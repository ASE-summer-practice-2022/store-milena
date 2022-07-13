import React from 'react';
import "../../styles/buttonDelete.scss";

//ROUTES
import { Routes, Route, Link } from 'react-router-dom';
import { ProductList } from '../Pages/ProductList';
import { Basket } from '../../components/Pages/Basket';
import { CardReview } from '../../components/Pages/CardReview';

//MUI
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CardItem = ({card}: any) => {

    return (
            <div className="product-card">
                    {/*DESCRIPTION*/}
                    <div className="product-info" onClick={() => ''}>
                        <Link className="todoName" to="/cardreview">{card.name}</Link>
                        <p className="todoSubstance">Действующее вещество:</p>
                        <p className="todoSubstanceName">{card.substance.name}</p>
                        <img src={card.image} width='120px' height='120px'/>
                    </div>

                    {/*BUTTON*/}
                <div className="product-delete">
                    <IconButton color="secondary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                </div>
                <Routes>
                    <Route path="/cardreview" element={<CardReview />} />
                </Routes>
            </div>
    );
};

export default CardItem;
