import React, {useState} from 'react';
import { inject, observer } from "mobx-react";
import { storeNames } from "../../stores/Enum";
import Header from "../system/Header";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import BasketStore from "../../stores/BasketStore";

const Basket = (items: any) => {
    // const basketStore = new BasketStore();
    // basketStore.addProducts(items);

    return (
        <div>
            <Header/>
            <Card sx={{ maxWidth: "40%", display: "flex", justifyContent: "center", margin: "auto", marginTop: "2em" }}>
                <CardContent>
                    {/*НАЗВАНИЕ ТОВАРА*/}
                    <Typography variant="h6"> {} </Typography>
                    <Divider/>
                    {/*ДЕЙСТВУЮЩЕЕ ВЕЩ-ВО*/}
                    <Typography variant="h3"> {} </Typography>
                    <Typography variant="h4"> {} </Typography>
                </CardContent>
            </Card>
        </div>
    )
};

export default Basket;