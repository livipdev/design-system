import { buildImagePath } from '../Image/builders';
import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    ...theme.alignments.vertical,

    paddingTop: theme.spaces.loose.value,
  },

  bg: {
    backgroundImage: (props) => `url(${buildImagePath(props.background)})`,

    [theme.breakpoints.up(SCREEN_SIZES.SMALL)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, 'sm')})`,
    },

    [theme.breakpoints.up(SCREEN_SIZES.MEDIUM)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, 'md')})`,
    },

    [theme.breakpoints.up(SCREEN_SIZES.LARGE)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, 'lg')})`,
    },

    [theme.breakpoints.up(SCREEN_SIZES.EXTRA_LARGE)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.background, 'xl')})`,
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
