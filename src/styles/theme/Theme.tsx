import React from 'react';
import { createTheme } from '@mui/material/styles';
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
            color: colors.Black,
        },
        h6: {
            fontWeight: 400,
            fontSize: "large",
            color: colors.Black,
        },
        h3: {
            fontSize: "medium",
            color: colors.middleGray
        },
        h4: {
            fontSize: "small",
            color: colors.middleGray
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    borderRadius: 16,
                    padding: 12,
                    backgroundColor: colors.White,
                    minWidth: 300,
                    minHeight: 180,
                },
            },
            // variants: [{
            //     props: { variant: 'shell' },
            //     style: {
            //         position: 'absolute',
            //         bottom: 0,
            //         right: 0,
            //         transform: 'translate(70%, 50%)',
            //         borderRadius: '50%',
            //         backgroundColor: colors.Byzantium,
            //         opacity: 0.12,
            //         padding: '40%',
            //         '&:before': {
            //             position: 'absolute',
            //             borderRadius: '50%',
            //             content: '""',
            //             display: 'block',
            //             top: 0,
            //             left: 0,
            //             right: 0,
            //             bottom: 0,
            //             margin: '-16%',
            //             backgroundColor:  colors.Byzantium,
            //             opacity: 0.4
            //     },
            // },}]
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: colors.Black,
                    textDecoration: 'none',
                    hover: {
                        color: colors.Byzantium,
                    }
                },
            }
        },
        MuiButton: {
            styleOverrides:{
                root: {
                    color: colors.White,
                }
            }
        }
    }
});