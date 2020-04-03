import React from 'react';
import { useIntl } from 'react-intl';

import ImageSource from '../ImageSource';

import propTypes from './propTypes';
import { buildImageSet, buildImagePath } from './builders';

const Image = ({ classes, rootImage, title, alt }) => {
  const intl = useIntl();
  const imageSet = buildImageSet(rootImage);
  const defaultImage = buildImagePath(rootImage)

  return (
    <picture>
      {
        imageSet.map((source) => (
          <ImageSource
            image={source.image}
            viewport={source.viewport}
          />
        ))
      }
      <img
        className={classes.img}
        src={defaultImage}
        title={intl.formatMessage(title)}
        alt={intl.formatMessage(alt)}
      />
    </picture>
  );
};

Image.propTypes = propTypes;

export default Image;
