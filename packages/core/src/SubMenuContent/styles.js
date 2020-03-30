const styles = (theme) => ({
  root: {
    ...theme.alignments.center,

    [theme.breakpoints.down('sm')]: {
      ...theme.alignments.vertical,
      ...theme.animations.fade,

      animationName: '$fade',
    },
  },

  menu: {
    [theme.breakpoints.up('md')]: {
      ...theme.alignments.autoMarginLeft,
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
