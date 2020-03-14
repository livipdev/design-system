import { css } from '@material-ui/core/styles';

import theme from './index';
import { isWidthUp } from '../../withWidth';

export const materialBreakpoints = theme.breakpoints;

const breakpointsValues = materialBreakpoints.values;

const breakpoints = {
  xs: breakpointsValues.xs,
  xsHeight: 550,
  sm: breakpointsValues.sm,
  md: breakpointsValues.md,
  lg: breakpointsValues.lg,
  xl: breakpointsValues.xl,
};

export const SCREEN_SIZE = {
  EXTRA_SMALL: 'xs',
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
  EXTRA_LARGE: 'xl',
};

export const between = (label) => (`${label}Between`);
export const down = (label) => (`${label}Down`);
export const only = (label) => (`${label}Only`);
export const up = (label) => (`${label}Up`);

export const media = Object.keys(breakpoints).reduce((acc, label) => ({
  ...acc,
  [between(label)]: (...args) => css`
    ${materialBreakpoints.between(label)} {
      ${css(...args)}
    }
  `,
  [down(label)]: (...args) => css`
    ${materialBreakpoints.down(label)} {
      ${css(...args)}
    }
  `,
  [only(label)]: (...args) => css`
    ${materialBreakpoints.only(label)} {
      ${css(...args)}
    }
  `,
  [up(label)]: (...args) => css`
    ${materialBreakpoints.up(label)} {
      ${css(...args)}
    }
  `,
}), {});

export const mediaLabel = Object.keys(breakpoints).reduce((acc, label) => ({
  ...acc,
  [between(label)]: materialBreakpoints.between(label).replace('@media ', ''),
  [down(label)]: materialBreakpoints.down(label).replace('@media ', ''),
  [only(label)]: materialBreakpoints.only(label).replace('@media ', ''),
  [up(label)]: materialBreakpoints.up(label).replace('@media ', ''),
}), {});

export const defaultCarouselBreakpoints = {
  arrows: true,
  responsive: [{
    breakpoint: breakpoints.sm,
    settings: {
      arrows: false,
    },
  }],
};

export const isMobile = (width) => width === 'xs';

export const isMediumUp = (width) => isWidthUp('md', width);

export const isDesktop = (width) => isWidthUp('lg', width);

export default breakpoints;
