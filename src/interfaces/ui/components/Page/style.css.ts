import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../style/theme.css';

export const main = style({
  padding: `${calc(vars.space).multiply(2)} ${calc(vars.space).multiply(8)}`,
});

export const ulWrapper = style({
  paddingTop: calc(vars.space).multiply(4).toString(),
});
