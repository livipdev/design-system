import { SCREEN_SIZES } from '../styles/theme/constants';
import { buildImagePath } from './builders';

const styles = (theme) => ({
  img: {
    backgroundImage: (props) => `url(${buildImagePath(props.rootImage)})`,

    [theme.breakpoints.up(SCREEN_SIZES.SMALL)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.rootImage, SCREEN_SIZES.SMALL)})`,
    },

    [theme.breakpoints.up(SCREEN_SIZES.MEDIUM)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.rootImage, SCREEN_SIZES.MEDIUM)})`,
    },

    [theme.breakpoints.up(SCREEN_SIZES.LARGE)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.rootImage, SCREEN_SIZES.LARGE)})`,
    },

    [theme.breakpoints.up(SCREEN_SIZES.EXTRA_LARGE)]: {
      backgroundImage: (props) => `url(${buildImagePath(props.rootImage, SCREEN_SIZES.EXTRA_LARGE)})`,
    },
  },
});

export default styles;
