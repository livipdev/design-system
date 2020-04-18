import { SCREEN_SIZES } from '../styles/theme/constants';

export const selectTabsCenteredFlag = (viewport) => (
  viewport == SCREEN_SIZES.MEDIUM ||
  viewport == SCREEN_SIZES.LARGE ||
  viewport == SCREEN_SIZES.EXTRA_LARGE
);
