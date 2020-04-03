const styles = (theme) => ({
  root: {
    ...theme.alignments.center,

    [theme.breakpoints.down('sm')]: {
      ...theme.visibilities.removed,
    },
  },
});

export default styles;
