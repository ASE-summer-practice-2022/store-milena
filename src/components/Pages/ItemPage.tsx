import React from 'react';
import { inject, observer } from "mobx-react";
import { storeNames } from "../../stores/Enum";

//MUI
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import CardStyles from "../../styles/UseStyles";
import cx from 'clsx';

const ItemPage = inject(storeNames.CardStoreName)(observer((props: any) => {
    const styles = CardStyles();

    const cardStore = props.CardStore;
    const { id } = useParams();

    const product = cardStore.readItem(Number(id));

    return (
        <>
            <Card className={cx(styles.card)}>
                <CardContent>
                    {/*НАЗВАНИЕ ТОВАРА*/}
                    <Typography variant="h1"> {product.name} </Typography>
                    <Divider/>
                    {/*ДЕЙСТВУЮЩЕЕ ВЕЩ-ВО*/}
                    <Typography variant="h6"> {product.substance.name} </Typography>
                    <Typography variant="h3"> {product.substance.code} </Typography>
                </CardContent>
            </Card>
        </>
    )
}));

export default ItemPage;