import { style, styleVariants } from '@vanilla-extract/css';

import { buttonBase } from '../../style/button.css';
import { sprinkles } from '../../style/sprinkles.css';
import { vars } from '../../style/theme.css';
import { ul } from '../TaskList/style.css';

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

export const input = style({
  accentColor: 'black',
});

const labelBase = style({
  flex: 'auto 1 1',
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

export const button = style([buttonBase, { height: vars.spacing[8] }]);
