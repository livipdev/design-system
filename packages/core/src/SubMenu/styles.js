import { fade } from '../styles/colorManipulator';

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      backgroundColor: fade(theme.palette.primary.light, 0.95),
      paddingTop: theme.spaces.compact.value,
      paddingBottom: theme.spaces.compact.value,
    },
  },
});

export default styles;
