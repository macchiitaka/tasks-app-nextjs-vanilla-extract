import { style, styleVariants } from '@vanilla-extract/css';

const rootBase = style({
  width: '100vw',
  height: '100vh',
});

export const root = styleVariants({
  light: [
    rootBase,
    {
      background: 'white',
    },
  ],
  dark: [
    rootBase,
    {
      background: 'black',
    },
  ],
});
