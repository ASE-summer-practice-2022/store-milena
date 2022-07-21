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
        allVariants: {
            fontWeight: 300,
        },
        h1: {
            fontWeight: 400,
            fontSize: `40px`,
            color: colors.black,
        },
        h6: {
            fontWeight: 400,
            fontSize: "large",
        },
        h3: {
            fontSize: "medium",
            color: colors.middleGray
        },
        h4: {
            fontSize: "small",
            color: colors.middleGray
        },
        button: {
            color: colors.White,
        }
    },
});