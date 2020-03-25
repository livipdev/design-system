import { getHalfSpace, getSpaceTimes } from '../styles/spacing';

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    paddingTop: getHalfSpace(),
    paddingBottom: getHalfSpace(),
  },
});

export default styles;
