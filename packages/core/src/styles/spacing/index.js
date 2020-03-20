import livipTheme from '../theme';
import { FULL_SPACE } from './constants';

export const getFullSpace = (theme=livipTheme, fullSpace=FULL_SPACE) => theme.spacing(fullSpace);
export const getSpaceTimes = (multipler, ...args) => getFullSpace(...args) * multipler;

export const getDoubledSpace = (...args) => getSpaceTimes(2, ...args);
export const getHalfSpace = (...args) => getSpaceTimes(.5, ...args);
