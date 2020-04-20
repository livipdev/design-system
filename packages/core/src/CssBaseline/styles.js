import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  '@global': {
    body: {
      [theme.breakpoints.down(SCREEN_SIZES.MEDIUM)]: {
        ...theme.sizes.hideHorizontalScroll,
      },
    },
  },
});

export default styles;
