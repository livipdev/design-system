const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      animation: `$fade ${theme.transitions.duration.enteringScreen * 2}ms ${theme.transitions.easing.easeInOut}`,
    },
  },

  isNotExiting: {},

  isExiting: {
    animation: `$fade ${theme.transitions.duration.enteringScreen * 2}ms ${theme.transitions.easing.easeInOut}`,
    animationDirection: 'reverse',
  },

  '@keyframes fade': {
    '0%': {
      opacity: '0',
    },

    '100%': {
      opacity: '1',
    },
  },
});

export default styles;
