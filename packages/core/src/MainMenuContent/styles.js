const styles = (theme) => ({
  root: {
    ...theme.alignments.equallySpaced,

    [theme.breakpoints.down('sm')]: {
      ...theme.alignments.vertical,
      ...theme.animations.fade,

      animationName: '$fade',
    },
  },

  isNotExiting: {},

  isExiting: {
    ...theme.animations.fade,
    ...theme.animations.reversed,

    animationName: '$fade',
  },

  '@keyframes fade': theme.keyframes.fade,
});

export default styles;
