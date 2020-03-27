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
    },
  },
});

export default styles;
