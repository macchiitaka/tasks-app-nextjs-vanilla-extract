import { style } from '@vanilla-extract/css';

import { DARK, LIGHT, vars } from '../../style/theme.css';

export const main = style({
  padding: `${vars.spacing[2]} ${vars.spacing[8]}`,
});

export const h1 = style({
  '@media': {
    [LIGHT]: {
      color: vars.palette.black,
    },
    [DARK]: {
      color: vars.palette.white,
    },
  },
});

export const ulWrapper = style({
  paddingTop: vars.spacing[4],
});
