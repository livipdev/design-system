import { getDoubledSpace, getFullSpace } from '../styles/spacing';

const styles = (theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      '&> button:first-child': {
        marginRight: getDoubledSpace(),
      },
    },

    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      bottom: '50px',
      display: 'flex',
      flexDirection: 'column',

      '&> button:first-child': {
        marginBottom: getFullSpace(),
      },

      '&> button': {
        minWidth: '100%',
      },
    },
  },
});

export default styles;
