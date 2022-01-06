import { style } from '@vanilla-extract/css';

import { vars } from './theme.css';

export const buttonBase = style({
  height: vars.spacing[8],
  border: `solid 1px ${vars.palette.black70}`,
  backgroundColor: vars.palette.white,
  cursor: 'pointer',
  selectors: {
    '&:is(:hover, :focus)': {
      backgroundColor: vars.palette.black5,
    },
  },
});
