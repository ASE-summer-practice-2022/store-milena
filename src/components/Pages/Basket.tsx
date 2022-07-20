import React, {useState} from 'react';
import { inject, observer } from "mobx-react";
import { storeNames } from "../../stores/Enum";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import BasketStore from "../../stores/BasketStore";
import Item from "../../models/Item";

const Basket = inject(storeNames.BasketStoreName)(observer((items: any) => {
    return (
        <div>
            <Card sx={{ maxWidth: "40%", display: "flex", justifyContent: "center", margin: "auto", marginTop: "2em" }}>
                <CardContent>
                    {/*НАЗВАНИЕ ТОВАРА*/}
                    <Typography variant="h6"> {items.name} </Typography>
                    <Divider/>
                    {/*ДЕЙСТВУЮЩЕЕ ВЕЩ-ВО*/}
                    <Typography variant="h3"> {items.substanceName} </Typography>
                    <Typography variant="h4"> {items.substanceCode} </Typography>
                </CardContent>
            </Card>
        </div>
    )
}));

export default Basket;