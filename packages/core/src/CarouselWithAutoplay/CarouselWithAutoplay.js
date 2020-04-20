import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import { selectCarouselClasses } from './selectors';
import propTypes from './propTypes';

const CarouselWithAutoplay = ({ classes, customClasses, variant, ...props }) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const mergedCarouselClasses = selectCarouselClasses(classes, customClasses, variant);

  return (
    <AutoplaySlider
      className={mergedCarouselClasses}
      {...props}
    />
  );
};

CarouselWithAutoplay.propTypes = {
  ...AwesomeSlider.propTypes,
  ...propTypes,
};

export default CarouselWithAutoplay;
