import { style } from '@vanilla-extract/css';

import { vars } from '../../style/theme.css';

export const form = style({
  display: 'grid',
  gridTemplate: `'input . submit' ${vars.spacing[8]} / 1fr ${vars.spacing[2]} max-content`,
  alignItems: 'center',
  width: '100%',
});

const base = {
  height: vars.spacing[8],
};

export const input = style([
  base,
  {
    boxSizing: 'border-box',
    padding: `0 ${vars.spacing[2]}`,
    gridArea: 'input',
  },
]);

export const button = style([base, { gridArea: 'submit' }]);
