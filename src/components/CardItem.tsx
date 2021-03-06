import React from 'react';
import "../styles/buttonDelete.scss";
import Basket from "../components/Pages/Basket";
//ROUTES
import { Link } from 'react-router-dom';
//MUI
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";


export default function CardItem (data: any) {
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
                <IconButton onClick={() => {<Basket itemId={data.product} />} } color="secondary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </div>
        </div>
    );
}
