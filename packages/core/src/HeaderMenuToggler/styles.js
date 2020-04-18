import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    ...theme.alignments.fixed.topLeftEdge,

    mixBlendMode: 'difference',
    color: theme.palette.common.white,

    [theme.breakpoints.up(SCREEN_SIZES.MEDIUM)]: {
      ...theme.visibilities.removed,
    },
  },
});

export default styles;
