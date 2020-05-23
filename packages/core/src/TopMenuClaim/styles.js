const styles = (theme) => ({
  root: {
    ...theme.alignments.autoMarginLeft,
    whiteSpace: theme.alignments.whitespaces.preWrap,
  },

  typography: {
    color: theme.palette.primary.lighter,
  }
});

export default styles;
