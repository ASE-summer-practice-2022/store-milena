import React from 'react';
import "../../styles/Header.scss";
import "../../styles/Links.scss";

//ROUTES
import { Routes, Route, Link } from 'react-router-dom';
import { ProductList } from '../Pages/ProductList';
import { Basket } from '../../components/Pages/Basket';
import { CardReview } from '../../components/Pages/CardReview';

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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}/>
                    <Link className="MuiLinkBase" color="inherit" to="/Basket">Корзина</Link>
                    <Link className="MuiLinkBase" color="inherit" to="/">Главная</Link>
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>

            <Routes>
                <Route path="/basket" element={<Basket />} />
                <Route path="/" element={<ProductList />} />
                <Route path="/cardreview" element={<CardReview />} />
            </Routes>
        </>
    );
}