import { isWidthUp } from '../withWidth';
import { MOBILE_BREAKPOINT } from '../styles/theme/constants';

export const selectDefaultOpenValue = (width) =>
  isWidthUp(MOBILE_BREAKPOINT, width);

export const selectOpenValue = (prop, width) =>
  prop || selectDefaultOpenValue(width);
