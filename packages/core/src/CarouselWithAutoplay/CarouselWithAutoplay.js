import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

//import { selectCarouselClasses } from './selectors';
import propTypes from './propTypes';

const CarouselWithAutoplay = ({ classes, variant, ...props }) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  //const mergedSliderClasses = selectCarouselClasses(classes, variant);

  return (
    <AutoplaySlider
      className={classes.carousel}
      {...props}
    />
  );
};

CarouselWithAutoplay.propTypes = {
  ...AwesomeSlider.propTypes,
  ...propTypes,
};

export default CarouselWithAutoplay;
