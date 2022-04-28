import { globalStyle } from '@vanilla-extract/css';

import { vars } from './theme.css';

globalStyle('body', {
  fontFamily: vars.fontFamily,
});
