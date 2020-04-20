import useTheme from '../styles/useTheme';
import { DEFAULT_VIEWPORT } from './constants';

export const buildImageSet = (rootImage) => {
  const theme = useTheme();
  const viewports = theme.breakpoints.keys.reverse();

  return viewports.map((viewport) => ({
    viewport,
    image: buildImagePath(rootImage, viewport),
  }));
};

export const buildImagePath = (image, viewport=DEFAULT_VIEWPORT) => {
  const filename = image.split('.').slice(0, -1).join('.');
  const ext = image.split('.').pop();

  const viewportImage = `${filename}-${viewport}`;

  return `${viewportImage}.${ext}`;
};
