import { fade } from '../styles/colorManipulator';
import { getFullSpace } from '../styles/spacing';

const styles = (theme) => ({
  root: {
    backgroundColor: fade(theme.palette.primary.main, 0.95),
    padding: getFullSpace(),
  },
});

export default styles;
