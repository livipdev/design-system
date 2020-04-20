import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    [theme.breakpoints.down(SCREEN_SIZES.SMALL)]: {
      zIndex: theme.zIndex.modal + 1,
    }
  },
});

export default styles;
