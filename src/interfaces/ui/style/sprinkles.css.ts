import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { vars } from './theme.css';

const colorProperties = defineProperties({
  conditions: {
    lightMode: {
      '@media': '(prefers-color-scheme: light)',
    },
    darkMode: {
      '@media': '(prefers-color-scheme: dark)',
    },
  },
  defaultCondition: false,
  properties: {
    color: vars.palette,
    background: vars.palette,
  },
});

export const sprinkles = createSprinkles(colorProperties);
