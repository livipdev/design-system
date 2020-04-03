import { useTheme } from '../styles';
import { SELECTOR } from './constants';

export const buildMedia = (viewport, selector=SELECTOR) => {
  const theme = useTheme();
  const breakpoint = theme.breakpoints.values[viewport];

  return `(${selector}: ${breakpoint}px)`;
};
