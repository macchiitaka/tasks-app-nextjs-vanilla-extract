import { style } from '@vanilla-extract/css';

import { sprinkles } from '../../style/sprinkles.css';
import { vars } from '../../style/theme.css';

export const main = style({
  padding: `${vars.spacing[2]} ${vars.spacing[8]}`,
});

export const h1 = sprinkles({
  color: {
    lightMode: 'black',
    darkMode: 'white',
  },
});

export const ulWrapper = style({
  paddingTop: vars.spacing[4],
});
