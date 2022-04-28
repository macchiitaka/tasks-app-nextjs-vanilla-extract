import { style } from '@vanilla-extract/css';

import { DARK, LIGHT, vars } from './theme.css';

export const buttonBase = style({
  height: vars.spacing[8],
  cursor: 'pointer',
  '@media': {
    [LIGHT]: {
      color: vars.palette.black,
      border: `solid 1px ${vars.palette.black70}`,
      backgroundColor: vars.palette.white,
    },
    [DARK]: {
      color: vars.palette.white,
      border: `solid 1px ${vars.palette.white70}`,
      backgroundColor: vars.palette.black,
    },
  },
  selectors: {
    '&:is(:hover, :focus)': {
      '@media': {
        [LIGHT]: {
          backgroundColor: vars.palette.black5,
        },
        [DARK]: {
          backgroundColor: vars.palette.white20,
        },
      },
    },
  },
});
