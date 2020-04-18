import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    ...theme.alignments.equallySpaced,

    [theme.breakpoints.down(SCREEN_SIZES.SMALL)]: {
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
