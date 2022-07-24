import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import colors from "./colors.modules.scss";
import { styled } from '@mui/system';
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';

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

export const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 10px;
    height: 18px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 11px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #9c27b0;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 4px;
    right: 2px;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }

  & .${badgeUnstyledClasses.invisible} {
    display: none;
  }
`;