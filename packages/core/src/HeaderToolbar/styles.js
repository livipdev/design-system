import { getDoubledSpace } from '../styles/spacing';

const styles = (theme) => ({
  root: {
    flexDirection: 'column',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  gutters: {
    paddingLeft: getDoubledSpace(),
    paddingRight: getDoubledSpace(),
  },
});

export default styles;
