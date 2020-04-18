import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    ...theme.alignments.center,

    [theme.breakpoints.down(SCREEN_SIZES.SMALL)]: {
      ...theme.visibilities.removed,
    },
  },
});

export default styles;
