const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },

  menu: {
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
    },
  },
});

export default styles;
