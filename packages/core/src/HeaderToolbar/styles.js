import { SCREEN_SIZES } from '../styles/theme/constants';

const styles = (theme) => ({
  root: {
    ...theme.alignments.vertical,

    [theme.breakpoints.down(SCREEN_SIZES.SMALL)]: {
      ...theme.visibilities.removed,
    },

    '&> div': {
      [theme.breakpoints.down(SCREEN_SIZES.MEDIUM)]: {
        paddingLeft: theme.spaces.loose.value,
        paddingRight: theme.spaces.loose.value,
      },
    },
  },

  gutters: {
    paddingLeft: theme.spaces.loose.value,
    paddingRight: theme.spaces.loose.value,
  },
});

export default styles;
