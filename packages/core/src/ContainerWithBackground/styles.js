import { buildImagePath } from '../Image/builders';
import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    ...theme.alignments.vertical,

    paddingTop: theme.spaces.loose.value,
    height: (props) => props.cover ? '100vh' : 'unset',
  },

  bg: {
    backgroundImage: (props) => `url(${buildImagePath(props.background)})`,

    [theme.breakpoints.up(SCREEN_SIZES.EXTRA_SMALL)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, SCREEN_SIZES.EXTRA_SMALL)})`,
    },

    [theme.breakpoints.up(SCREEN_SIZES.SMALL)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, SCREEN_SIZES.SMALL)})`,
    },

    [theme.breakpoints.up(SCREEN_SIZES.MEDIUM)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, SCREEN_SIZES.MEDIUM)})`,
    },

    [theme.breakpoints.up(SCREEN_SIZES.LARGE)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, SCREEN_SIZES.LARGE)})`,
    },

    [theme.breakpoints.up(SCREEN_SIZES.EXTRA_LARGE)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, SCREEN_SIZES.EXTRA_LARGE)})`,
    },
  },

  highlight: {
    ...theme.backgrounds.highlight.background,
    ...theme.backgrounds.highlight.alignment.default,
    ...theme.sizes.almostFullScreen.default,
    ...theme.alignments.center,

    [theme.breakpoints.down(SCREEN_SIZES.SMALL)]: {
      ...theme.backgrounds.highlight.alignment.mobile,
      ...theme.sizes.almostFullScreen.mobile,
    },
  },
});

export default styles;
