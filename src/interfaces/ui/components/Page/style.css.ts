import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '../../style/theme.css';

export const main = style({
  padding: [vars.spacing[2], vars.spacing[8]].join(' '),
});

export const h1 = styleVariants({
  light: {
    color: 'black',
  },
  dark: {
    color: 'white',
  },
});

export const ulWrapper = style({
  paddingTop: vars.spacing[4],
});
