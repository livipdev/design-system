const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
});

export default styles;
