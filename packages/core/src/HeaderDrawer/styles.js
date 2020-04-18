import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  paper: {
    ...theme.alignments.center,
    ...theme.sizes.viewports.halfwidth,

    background: theme.palette.primary.main,
    padding: theme.spaces.loose.value,

    [theme.breakpoints.down(SCREEN_SIZES.EXTRA_SMALL)]: {
      ...theme.sizes.viewports.fullwidth,
    },
  },
});

export default styles;
