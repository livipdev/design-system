const styles = (theme) => ({
  paper: {
    ...theme.alignments.center,
    ...theme.sizes.viewports.halfwidth,

    background: theme.palette.primary.main,
    padding: theme.spaces.loose.value,

    [theme.breakpoints.down('xs')]: {
      ...theme.sizes.viewports.fullwidth,
    },
  },
});

export default styles;
