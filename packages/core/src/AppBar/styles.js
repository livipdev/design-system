const styles = (theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      zIndex: theme.zIndex.modal + 1,
    }
  },
});

export default styles;
