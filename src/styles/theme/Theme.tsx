import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import colors from "../colors.modules.scss";

export const theme = createTheme({
    palette: {
        primary: {
            main: colors.middleGray,
        },
    },
    typography: {
        fontFamily: [
            'Montserrat'
        ].join(','),
        h6: {
            fontWeight: 400,
            fontSize: "large",
            color: colors.black
        },
        h3: {
            fontWeight: 300,
            fontSize: "medium",
            color: colors.middleGray
        },
        h4: {
            fontWeight: 300,
            fontSize: "small",
            color: colors.middleGray
        },
        button: {
            fontWeight: 300,
            color: colors.White
        }
    },
});