import { style } from '@vanilla-extract/css';

import { DARK, LIGHT, vars } from '../../interfaces/ui/style/theme.css';

export const root = style({
  width: '100vw',
  height: '100vh',
  '@media': {
    [LIGHT]: {
      backgroundColor: vars.palette.white,
    },
    [DARK]: {
      backgroundColor: vars.palette.black,
    },
  },
});
