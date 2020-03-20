import { fade } from '@material-ui/core/styles/colorManipulator';
import { getDoubledSpace, getHalfSpace } from '../styles/spacing';

const commonBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = (theme) => ({
  container: {
    backgroundColor: fade(theme.palette.primary.main, 0.95),
  },
  box: {
    ...commonBox,
    flexDirection: 'row',
  },
  logoBox: {
    ...commonBox,
    flexDirection: 'column',
    marginRight: getHalfSpace(),
  },
  menuBox: {
    ...commonBox,
    marginLeft: getDoubledSpace(),
    marginRight: getDoubledSpace(),
  }
});

export default styles;
