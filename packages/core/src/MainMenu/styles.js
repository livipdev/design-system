import { fade } from '../styles/colorManipulator';
import { getFullSpace } from '../styles/spacing';

const styles = (theme) => ({
  root: {
    transition: theme.transitions.create(),

    [theme.breakpoints.up('md')]: {
      backgroundColor: fade(theme.palette.primary.main, 0.95),
      paddingTop: getFullSpace(),
      paddingBottom: getFullSpace(),
    },
  },
});

export default styles;
