import { style } from '@vanilla-extract/css';

import { vars } from '../../style/theme.css';
import { ul } from '../TaskUList/style.css';

export const li = style({
  display: 'grid',
  gridTemplate:
    "'input . label . delete' 32px / max-content 8px 1fr 8px max-content",
  alignItems: 'center',
  width: '100%',
  selectors: {
    // @todo 依存を逆転
    [`${ul} > &:not(:first-child)`]: {
      marginTop: '12px',
    },
  },
});

export const input = style({
  gridArea: 'input',
});

export const label = style({
  gridArea: 'label',
  overflow: 'hidden',
  color: vars.color.black,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  selectors: {
    [`${input}:checked + &`]: {
      color: vars.color.black70,
      textDecoration: 'line-through',
    },
  },
});

export const button = style({
  gridArea: 'delete',
  height: '32px',
});
