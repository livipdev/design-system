import { fade } from '@material-ui/core/styles/colorManipulator';

const commonBox = {
  display: 'flex',
  justifyContent: 'center',
};

const styles = (theme) => ({
  container: {
    backgroundColor: fade(theme.palette.primary.main, 0.95),
  },
  rootBox: {
    ...commonBox,
    flexDirection: 'row',
  },
  logoBox: {
    ...commonBox,
    flexDirection: 'column',
  },
});

export default styles;
