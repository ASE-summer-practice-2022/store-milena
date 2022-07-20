import React from 'react';
import "../styles/buttonDelete.scss";
import Basket from "../components/Pages/Basket";
import {inject, observer} from "mobx-react";
import {storeNames} from "../stores/Enum";
import BasketStore from "../stores/BasketStore";
//ROUTES
import { Link } from 'react-router-dom';
//MUI
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";


const CardItem = inject(storeNames.BasketStoreName)(observer((data: any) => {
    return (
        <div className="product-card">
            {/*DESCRIPTION*/}
            <div className="product-info" onClick={() => 'data.id'}>
                <Typography variant="h6" ><Link className="todoName" to={`/ItemPage/${data.product.id}`}>{data.product.name}</Link></Typography>
                <Divider/>
                <Typography variant="h3" className="todoSubstanceName">{data.product.substanceName}</Typography>
                <Typography variant="h4" className="todoSubstanceName">{data.product.substanceCode}</Typography>
            </div>

            {/*BUTTON*/}
            <div className="product-delete">
                <IconButton onClick={() => data.BasketStore.addProduct(data.item)} color="secondary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </div>
        </div>
    );
}));

export default CardItem;