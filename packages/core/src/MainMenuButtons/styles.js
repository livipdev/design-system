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
      animation: `$fadeIn ${theme.transitions.duration.enteringScreen * 3}ms ${theme.transitions.easing.easeInOut}`,

      '&> button:first-child': {
        marginBottom: getFullSpace(),
      },

      '&> button': {
        minWidth: '100%',
      },
    },
  },

  isNotExiting: {},

  isExiting: {
    display: 'none',
  },

  '@keyframes fadeIn': {
    '0%': {
      display: 'none',
      opacity: '0',
    },

    '51%': {
      display: 'inherit',
      opacity: '0',
    },

    '100%': {
      opacity: '1',
    },
  },
});

export default styles;
