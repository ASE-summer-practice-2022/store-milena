import React from 'react';
import {inject, observer} from "mobx-react";
import {storeNames} from "../stores/Enum";
import BasketStore from "../stores/BasketStore";
//ROUTES
import { Link } from 'react-router-dom';
//MUI
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Divider from "@mui/material/Divider";
import { Card, CardContent, Typography, CardActions } from "@mui/material";
import CardStyles from "../styles/UseStyles";
import cx from 'clsx';
import "../styles/Style.scss";

const CardItem = inject(storeNames.BasketStoreName)(observer((props: any) => {
    const styles = CardStyles();

    return (
        <div>
        <Card className={cx(styles.card)} >
            <CardContent>
            {/*DESCRIPTION*/}
                <Link className={'customLink'} to={`/ItemPage/${props.item.id}`}>
                    <Typography variant="h6">{props.item.name}</Typography>
                </Link>
                <Divider/>
                <Typography variant="h3"> {props.item.substance.name} </Typography>
                <Typography variant="h4"> {props.item.substance.code} </Typography>
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
    );
}));

export default CardItem;