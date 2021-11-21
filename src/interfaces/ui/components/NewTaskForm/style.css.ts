import { style } from '@vanilla-extract/css';

export const form = style({
  display: 'grid',
  gridTemplate: `'input . submit' 32px / 1fr 8px max-content`,
  alignItems: 'center',
  width: '100%',
});

const base = {
  height: '32px',
};

export const input = style([
  base,
  {
    boxSizing: 'border-box',
    height: '32px',
    padding: '0 8px',
    gridArea: 'input',
  },
]);

export const button = style([base, { gridArea: 'submit' }]);
