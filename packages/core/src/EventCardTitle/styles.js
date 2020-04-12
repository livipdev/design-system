const styles = (theme) => ({
  container: {
    paddingTop: theme.spaces.default.value,
    paddingBottom: theme.spaces.default.value,
  },

  action: {
    ...theme.alignments.autoMarginLeft,
    ...theme.alignments.end,
  },
});

export default styles;
