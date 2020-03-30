const styles = (theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      '&> button:first-child': {
        marginRight: theme.spaces.default.value,
      },
    },

    [theme.breakpoints.down('sm')]: {
      ...theme.alignments.center,
      ...theme.alignments.vertical,
      ...theme.alignments.fixed.bottomEdge2,
      ...theme.animations.longFade,

      animationName: '$fade',

      '&> button:first-child': {
        marginBottom: theme.spaces.default.value,
      },

      '&> button': {
        ...theme.sizes.fullwidth,
      },
    },
  },

  isNotExiting: {},

  isExiting: {
    ...theme.visibilities.removed,
  },

  '@keyframes fade': theme.keyframes.delayedFade,
});

export default styles;
