import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../style/theme.css';
import { ul } from '../TaskUList/style.css';

export const li = style({
  display: 'grid',
  gridTemplate: `'input . label . delete' ${calc.multiply(
    vars.space,
    8,
  )} / max-content ${calc(vars.space).multiply(2)} 1fr ${calc.multiply(
    vars.space,
    2,
  )} max-content`,
  alignItems: 'center',
  width: '100%',
  selectors: {
    // @todo 依存を逆転
    [`${ul} > &:not(:first-child)`]: {
      marginTop: calc(vars.space).multiply(3).toString(),
    },
  },
});

export const input = style({
  gridArea: 'input',
});

const labelBase = style({
  gridArea: 'label',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const label = styleVariants({
  'done.true': [
    labelBase,
    {
      color: vars.color.black70,
      textDecoration: 'line-through',
    },
  ],
  'done.false': [
    labelBase,
    {
      color: vars.color.black,
    },
  ],
});

export const button = style({
  gridArea: 'delete',
  height: calc(vars.space).multiply(8).toString(),
});
