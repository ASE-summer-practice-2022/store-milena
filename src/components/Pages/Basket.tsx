import React from 'react';
import { inject, observer } from "mobx-react";
import { storeNames } from "../../stores/Enum";
import { Card, CardContent, CardMedia, Typography, Grid, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import BasketStore from "../../stores/BasketStore";
import Item from "../../models/Item";
import DeleteIcon from '@material-ui/icons/Delete';
import CardStyles from "../../styles/UseStyles";
import cx from 'clsx';

const Basket = inject(storeNames.BasketStoreName)(observer((props: any) => {
    const styles = CardStyles();

    return (
        <div>
            <Grid container spacing={5} maxWidth="95%" margin="auto"> {
                props.BasketStore.items.map((item: Item) =>
                    <Grid item xs={3} key={item.id} style={{ minWidth: "900px",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"}}>
                        <Card className={cx(styles.card)}>
                            <CardContent>
                                {/*НАЗВАНИЕ ТОВАРА*/}
                                <Typography variant="h6"> {item.name} </Typography>
                                <Divider/>
                                {/*ДЕЙСТВУЮЩЕЕ ВЕЩ-ВО*/}
                                <Typography variant="h3"> {item.substance.name} </Typography>
                                <Typography variant="h4"> {item.substance.code} </Typography>
                            </CardContent>
                                {/*КНОПКА*/}
                                <Button
                                    onClick={() => props.BasketStore.deleteProduct(item.id)}
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<DeleteIcon />}>
                                    <Typography variant="button">
                                        Удалить
                                    </Typography>
                                </Button>
                        </Card>
                    </Grid>
                )
            }
                </Grid>
        </div>
    )
}));

export default Basket;