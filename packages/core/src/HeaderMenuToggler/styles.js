const styles = (theme) => ({
  root: {
    ...theme.alignments.fixed.topLeftEdge,

    mixBlendMode: 'difference',
    color: theme.palette.common.white,

    [theme.breakpoints.up('md')]: {
      ...theme.visibilities.removed,
    },
  },
});

export default styles;
