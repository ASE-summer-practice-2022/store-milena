import React from 'react';
import { inject, observer } from "mobx-react";
import { storeNames } from "../../stores/Enum";
//MUI
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";


const ItemPage = inject(storeNames.CardStoreName)(observer((Items: any) => {
    const cardStore = Items.CardStore;
    const { id } = useParams();

    const item = cardStore.readItem(Number(id));

    return (
        <Card sx={{ maxWidth: "400px", display: "flex", justifyContent: "center", margin: "auto", marginTop: "2em" }}>
            <CardContent>
                {/*НАЗВАНИЕ ТОВАРА*/}
                <Typography variant="h6"> {item.name} </Typography>
                <Divider/>
                {/*ДЕЙСТВУЮЩЕЕ ВЕЩ-ВО*/}
                <Typography variant="body1"> {item.substanceName} </Typography>
                <Typography variant="body2"> {item.substanceCode} </Typography>
            </CardContent>
        </Card>
    )
}));

export default ItemPage;