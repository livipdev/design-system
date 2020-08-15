import { buildImagePath } from '../Image/builders';

export const buildBackgroundImage = (props, size) => (
  props.backgroundDarkMask
    ? `${buildDarkMask()}, url(${buildImagePath(props.background, size)})`
    : `url(${buildImagePath(props.background, size)})`
);

const buildDarkMask = () => (
  'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))'
);
