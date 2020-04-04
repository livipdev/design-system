const styles = (theme) => ({
  root: {
    ...theme.alignments.vertical,

    [theme.breakpoints.down('sm')]: {
      ...theme.visibilities.removed,
    },

    '&> div': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spaces.loose.value,
        paddingRight: theme.spaces.loose.value,
      },
    },
  },

  gutters: {
    paddingLeft: theme.spaces.loose,
    paddingRight: theme.spaces.loose,
  },
});

export default styles;
