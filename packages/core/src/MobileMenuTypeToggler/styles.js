const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,
    transition: theme.transitions.create(),
  },

  common: {},

  reverse: {
    transform: theme.transformers.rotate.reverse,
  },
});

export default styles;
