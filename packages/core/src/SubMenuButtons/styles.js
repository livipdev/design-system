const styles = (theme) => ({
  root: {
    ...theme.alignments.center,

    [theme.breakpoints.up('md')]: {
      ...theme.alignments.autoMarginLeft,
    },

    [theme.breakpoints.down('sm')]: {
      ...theme.alignments.fixed.bottomEdge,
      ...theme.animations.longFade,

      animationName: '$fade',
    },
  },

  isNotExiting: {},

  isExiting: {
    ...theme.visibilities.removed,
  },

  '@keyframes fade': theme.keyframes.delayedFade,
});

export default styles;
