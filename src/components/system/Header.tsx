import React from 'react';
import "../../styles/Header.scss";
import "../../styles/Links.scss";

//ROUTES
import routes from '../../route';
import { Route, Routes, Link } from 'react-router-dom';
import { Basket } from '../Pages/Basket';
import CardList from '../CardList';

//MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

export default function ButtonAppBar() {
    return (
        <>
        <ThemeProvider theme={darkTheme}>
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
                    <Link className="MuiLinkBase" color="inherit" to="/Basket">Корзина</Link>
                    <Link className="MuiLinkBase" color="inherit" to="/">Главная</Link>
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
            <Routes>
                <Route path="/" element={<CardList />} />
                <Route path="/basket" element={<Basket />} />
            </Routes>
        </>
    );
}