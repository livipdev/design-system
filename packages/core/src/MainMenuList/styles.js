import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = (theme) => ({
  root: {
    backgroundColor: fade(theme.palette.primary.main, 0.95),
  },
});

export default styles;
