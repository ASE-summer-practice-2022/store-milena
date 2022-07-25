import React from 'react';
//ROUTES
import { Link } from "react-router-dom";
//MUI and styles
import AppBar from '@mui/material/AppBar';
import {inject, observer} from "mobx-react";
import {storeNames} from "@stores/Enum";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import BasketStore from "@stores/BasketStore";
import {StyledBadge} from "@styles/UseStyles";


const ButtonAppBar = inject(storeNames.BasketStoreName)(observer((props: any) => {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography component="div" sx={{ flexGrow: 1 }}/>
                    <StyledBadge badgeContent={props.BasketStore.items.length}>
                        <Button component={Link} to="/Basket">Корзина</Button>
                    </StyledBadge>
                    <Button component={Link} to="/">Главная</Button>
                    <Button component={Link} to="/Login">Авторизация</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
}));

export default ButtonAppBar;