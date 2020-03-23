import { getHalfSpace } from '../styles/spacing';

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    marginLeft: getHalfSpace(),
    marginRight: getHalfSpace(),
  },
});

export default styles;
