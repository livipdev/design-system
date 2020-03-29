const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
    },

    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      bottom: '20px',
      animation: `$fadeIn ${theme.transitions.duration.enteringScreen * 3}ms ${theme.transitions.easing.easeInOut}`,
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
      display: 'flex',
      opacity: '0',
    },

    '100%': {
      opacity: '1',
    },
  },
});

export default styles;
