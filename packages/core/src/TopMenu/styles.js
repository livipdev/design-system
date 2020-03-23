import { getFullSpace } from '../styles/spacing';

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    paddingTop: getFullSpace(),
    paddingBottom: getFullSpace(),
  },
});

export default styles;
