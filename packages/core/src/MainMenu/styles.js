import { fade } from '../styles/colorManipulator';

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      backgroundColor: fade(theme.palette.primary.main, 0.95),
      paddingTop: theme.spaces.default.value,
      paddingBottom: theme.spaces.default.value,
    },
  },
});

export default styles;
