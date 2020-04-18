import { fade } from '../styles/colorManipulator';
import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up(SCREEN_SIZES.MEDIUM)]: {
      backgroundColor: fade(theme.palette.primary.main, 0.95),
      paddingTop: theme.spaces.default.value,
      paddingBottom: theme.spaces.default.value,
    },
  },
});

export default styles;
