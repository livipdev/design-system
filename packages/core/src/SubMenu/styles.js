import { fade } from '../styles/colorManipulator';
import { getHalfSpace } from '../styles/spacing';

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      backgroundColor: fade(theme.palette.primary.light, 0.95),
      paddingTop: getHalfSpace(),
      paddingBottom: getHalfSpace(),
    },
  },
});

export default styles;
