import { style, styleVariants } from '@vanilla-extract/css';

import { sprinkles } from '../../style/sprinkles.css';
import { vars } from '../../style/theme.css';
import { ul } from '../TaskUList/style.css';

export const li = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  width: '100%',
  selectors: {
    // @todo 依存を逆転
    [`${ul} > &:not(:first-child)`]: {
      marginTop: vars.spacing[3],
    },
  },
});

export const input = style({});

const labelBase = style({
  flexGrow: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const label = styleVariants({
  'done.true': [
    labelBase,
    {
      textDecoration: 'line-through',
    },
    sprinkles({
      color: {
        lightMode: 'black70',
        darkMode: 'white70',
      },
    }),
  ],
  'done.false': [
    labelBase,
    sprinkles({
      color: {
        lightMode: 'black',
        darkMode: 'white',
      },
    }),
  ],
});

export const button = style({
  height: vars.spacing[8],
});
