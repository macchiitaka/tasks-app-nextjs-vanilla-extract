import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    black: 'rgba(0, 0, 0, 1)',
    black70: 'rgba(0, 0, 0, 0.7)',
  },
});
