import { fade } from '../styles/colorManipulator';
import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up(SCREEN_SIZES.MEDIUM)]: {
      backgroundColor: fade(theme.palette.primary.light, 0.95),
      paddingTop: theme.spaces.compact.value,
      paddingBottom: theme.spaces.compact.value,
    },
  },
});

export default styles;
