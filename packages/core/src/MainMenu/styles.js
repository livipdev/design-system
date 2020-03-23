import { fade } from '../styles/colorManipulator';
import { getHalfSpace } from '../styles/spacing';

const styles = (theme) => ({
  container: {
    backgroundColor: fade(theme.palette.primary.main, 0.95),
    paddingTop: getHalfSpace(),
    paddingBottom: getHalfSpace(),
  },
});

export default styles;
