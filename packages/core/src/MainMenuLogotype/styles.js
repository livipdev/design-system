const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

export default styles;
