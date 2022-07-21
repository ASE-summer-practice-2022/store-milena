import React from 'react';
import Basket from "../components/Pages/Basket";
import {inject, observer} from "mobx-react";
import {storeNames} from "../stores/Enum";
import BasketStore from "../stores/BasketStore";
//ROUTES
import { Link } from 'react-router-dom';
//MUI
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Divider from "@mui/material/Divider";
import { Card, CardContent, CardMedia, Typography, CardActions, Button, CardActionArea } from "@mui/material";
import CardStyles from "../styles/UseStyles";
import cx from 'clsx';


const CardItem = inject(storeNames.BasketStoreName)(observer((props: any) => {
    const styles = CardStyles();

    return (
        <div>
        <Card className={cx(styles.card)}>
            <CardContent>
            {/*DESCRIPTION*/}
                <Link className="custom-link" to={`/ItemPage/${props.item.id}`}>
                    <Typography variant="h6">{props.item.name}</Typography>
                </Link>
                <Divider/>
                <Typography variant="h3"> {props.item.substanceName} </Typography>
                <Typography variant="h4"> {props.item.substanceCode} </Typography>
            </CardContent>
            <div className={styles.shell} />
            {/*BUTTON*/}
            <CardActions>
                <IconButton onClick={() => props.BasketStore.addProduct(props.item)} color="secondary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
        </div>

    // <div className="product-card">
    //     {/*DESCRIPTION*/}
    //     <div className="product-info">
    //         <Typography variant="h6" ><Link className="todoName" to={`/ItemPage/${props.product.id}`}>{props.product.name}</Link></Typography>
    //         <Divider/>
    //         <Typography variant="h3" className="todoSubstanceName">{props.product.substanceName}</Typography>
    //         <Typography variant="h4" className="todoSubstanceName">{props.product.substanceCode}</Typography>
    //     </div>
    //
    //     {/*BUTTON*/}
    //     <div className="product-delete">
    //         <IconButton onClick={() => props.BasketStore.addProduct(props.product)} color="secondary" aria-label="add to shopping cart">
    //             <AddShoppingCartIcon />
    //         </IconButton>
    //     </div>
    // </div>
    );
}));

export default CardItem;