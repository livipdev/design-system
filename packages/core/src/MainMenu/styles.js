import { fade } from '../styles/colorManipulator';
import { getSpaceTimes } from '../styles/spacing';

const styles = (theme) => ({
  container: {
    backgroundColor: fade(theme.palette.primary.main, 0.95),
    paddingTop: getSpaceTimes(.25),
    paddingBottom: getSpaceTimes(.25),
  },
});

export default styles;
