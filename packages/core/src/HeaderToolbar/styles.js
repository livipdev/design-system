const styles = (theme) => ({
  root: {
    ...theme.alignments.vertical,

    [theme.breakpoints.down('sm')]: {
      ...theme.visibilities.removed,
    },
  },

  gutters: {
    paddingLeft: theme.spaces.loose,
    paddingRight: theme.spaces.loose,
  },
});

export default styles;
