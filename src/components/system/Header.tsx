import React from 'react';
//ROUTES
import { Link } from "react-router-dom";
//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="inherit" component="div" sx={{ flexGrow: 1 }}/>
                    <Button component={Link} color="inherit" to="/Basket">Корзина</Button>
                    <Button component={Link} color="inherit" to="/">Главная</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
}