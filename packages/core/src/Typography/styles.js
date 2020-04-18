import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  h1: {
    color: theme.palette.common.white,

    [theme.breakpoints.down(SCREEN_SIZES.SMALL)]: {
      fontSize: '3.4rem',
    },
  },

  h2: {
    ...theme.alignments.centerText,
  },

  subtitle1: {
    color: theme.palette.common.white,
  },

  subtitle2: {
    ...theme.alignments.centerText,

    color: theme.palette.grey.highEmphasis,
    paddingTop: theme.spaces.default.value,
  }
});

export default styles;
