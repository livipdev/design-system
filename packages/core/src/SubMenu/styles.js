import { fade } from '../styles/colorManipulator';
import { getHalfSpace, getSpaceTimes } from '../styles/spacing';

const styles = (theme) => ({
  root: {
    backgroundColor: fade(theme.palette.primary.light, 0.95),
    paddingTop: getHalfSpace(),
    paddingBottom: getHalfSpace(),
    paddingLeft: getSpaceTimes(0.25),
    paddingRight: getSpaceTimes(0.25),
  },
});

export default styles;
