import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  palette: {
    white: 'rgba(255, 255, 255, 1)',
    white20: 'rgba(255, 255, 255, 0.2)',
    white70: 'rgba(255, 255, 255, 0.7)',
    black: 'rgba(0, 0, 0, 1)',
    black5: 'rgba(0, 0, 0, 0.05)',
    black70: 'rgba(0, 0, 0, 0.7)',
  },
  fontFamily:
    '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
  spacing: {
    '1': '4px',
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '8': '32px',
  },
  colorScheme: {},
});

export const LIGHT = '(prefers-color-scheme: light)';
export const DARK = '(prefers-color-scheme: dark)';
