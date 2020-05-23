import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    ...theme.alignments.center,

    '& > a': {
      color: theme.palette.primary.lighter,
    },

    [theme.breakpoints.up(SCREEN_SIZES.MEDIUM)]: {
      ...theme.alignments.autoMarginLeft,
    },

    [theme.breakpoints.down(SCREEN_SIZES.SMALL)]: {
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
