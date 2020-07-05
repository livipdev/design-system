import { fade } from '../styles/colorManipulator';
import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up(SCREEN_SIZES.MEDIUM)]: {
      backgroundColor: fade(theme.palette.primary.main, 0.95),
      paddingTop: '.75rem',
      paddingBottom: '.75rem',
    },
  },
});

export default styles;
