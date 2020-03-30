const styles = (theme) => ({
  root: {
    ...theme.alignments.center,

    [theme.breakpoints.down('sm')]: {
      ...theme.alignments.vertical,
    },
  },
});

export default styles;
