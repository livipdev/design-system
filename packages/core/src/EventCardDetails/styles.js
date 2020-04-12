const styles = (theme) => ({
  container: {
    ...theme.alignments.center,

    paddingTop: theme.spaces.compact.value,
    paddingBottom: theme.spaces.compact.value,
  },

  item: {
    ...theme.typography.caption,

    color: theme.palette.primary.contrastText,
    textTransform: 'capitalize',
  },

  last: {
    ...theme.alignments.autoMarginLeft,

    color: theme.palette.grey.mediumEmphasis,
  },

  icon: {
    marginRight: theme.spaces.minimum.value,
  },
});

export default styles;
