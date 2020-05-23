import { fade } from '../styles/colorManipulator';
import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up(SCREEN_SIZES.MEDIUM)]: {
      backgroundColor: fade(theme.palette.primary.light, 0.95),
    },
  },
});

export default styles;
