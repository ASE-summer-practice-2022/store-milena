import React from 'react';
import "../../styles/Header.scss";

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
        <ThemeProvider theme={darkTheme}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Button color="inherit" href="/Basket">Basket</Button>
                    <Button color="inherit" href="/">Home</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </ThemeProvider>
    );
}


// const Header = () => {
//     return (
//         <header>
//             <div className="head">
//                 <a className="active" href="#home">Home</a>
//                 <a href="Basket.html">Basket</a>
//             </div>
//         </header>
//     );
// };
//
// export default Header;