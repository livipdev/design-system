import { getFullSpace } from '../styles/spacing';


const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
    padding: getFullSpace(),
  },
});

export default styles;
