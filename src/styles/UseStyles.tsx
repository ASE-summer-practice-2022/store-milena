import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from "./colors.modules.scss";

const CardStyles = makeStyles(() => ({
    card: {
        position: 'relative',
        borderRadius: 16,
        padding: 12,
        backgroundColor: colors.White,
        minWidth: 300,
        minHeight: 180,
    },
    shell: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        transform: 'translate(70%, 50%)',
        borderRadius: '50%',
        backgroundColor: colors.Byzantium,
        opacity: 0.12,
        padding: '40%',
        '&:before': {
            position: 'absolute',
            borderRadius: '50%',
            content: '""',
            display: 'block',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: '-16%',
            backgroundColor:  colors.Byzantium,
            opacity: 0.4
        }
    },
}));

export default CardStyles;