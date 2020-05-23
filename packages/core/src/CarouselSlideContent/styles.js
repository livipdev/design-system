const styles = (theme) => ({
  container: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '100%',
    paddingTop: '0',
  },

  content: {
    height: '100%',
  },

  title: {
    ...theme.alignments.centerText,
    marginBottom: 0,
  },

  'aligned-to-left-content': {},

  'aligned-to-left-title': {
    color: theme.palette.common.white,
    textAlign: 'left',
    marginLeft: '10%',
  },
});

export default styles;
