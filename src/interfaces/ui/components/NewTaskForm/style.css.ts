import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../style/theme.css';

export const form = style({
  display: 'grid',
  gridTemplate: `'input . submit' ${calc.multiply(vars.space, 8)} / 1fr ${calc(
    vars.space,
  ).multiply(2)} max-content`,
  alignItems: 'center',
  width: '100%',
});

const base = {
  height: calc(vars.space).multiply(8).toString(),
};

export const input = style([
  base,
  {
    boxSizing: 'border-box',
    padding: `0 ${calc(vars.space).multiply(2)}`,
    gridArea: 'input',
  },
]);

export const button = style([base, { gridArea: 'submit' }]);
