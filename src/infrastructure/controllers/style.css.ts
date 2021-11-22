import { style } from '@vanilla-extract/css';

import { sprinkles } from '../../interfaces/ui/style/sprinkles.css';

export const root = style([
  sprinkles({
    background: {
      lightMode: 'white',
      darkMode: 'black',
    },
  }),
  style({
    width: '100vw',
    height: '100vh',
  }),
]);
