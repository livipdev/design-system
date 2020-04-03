import React from 'react';

import propTypes from './propTypes';
import { buildMedia } from './builders';

const ImageSource = ({ image, viewport }) => (
  <source
    srcset={image}
    media={buildMedia(viewport)}
  />
);

ImageSource.propTypes = propTypes;

export default ImageSource;
