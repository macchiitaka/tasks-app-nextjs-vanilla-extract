import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../style/theme.css';
import { ul } from '../TaskUList/style.css';

const AREA_INPUT = 'input';
const AREA_LABEL = 'label';
const AREA_DELETE = 'delete';

export const li = style({
  display: 'grid',
  gridTemplate: `'${AREA_INPUT} . ${AREA_LABEL} . ${AREA_DELETE}' ${vars.spacing[8]} / max-content ${vars.spacing[2]} 1fr ${vars.spacing[2]} max-content`,
  alignItems: 'center',
  width: '100%',
  selectors: {
    // @todo 依存を逆転
    [`${ul} > &:not(:first-child)`]: {
      marginTop: vars.spacing[3],
    },
  },
});

export const input = style({
  gridArea: AREA_INPUT,
});

const labelBase = style({
  gridArea: AREA_LABEL,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const label = recipe({
  base: labelBase,
  variants: {
    colorScheme: {
      light: {
        color: vars.palette.black,
      },
      dark: {
        color: vars.palette.white,
      },
    },
    done: {
      true: {
        textDecoration: 'line-through',
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        colorScheme: 'light',
        done: true,
      },
      style: {
        color: vars.palette.black70,
      },
    },
    {
      variants: {
        colorScheme: 'dark',
        done: true,
      },
      style: {
        color: vars.palette.white70,
      },
    },
  ],
  defaultVariants: {
    colorScheme: 'light',
    done: false,
  },
});

export const button = style({
  gridArea: AREA_DELETE,
  height: vars.spacing[8],
});
