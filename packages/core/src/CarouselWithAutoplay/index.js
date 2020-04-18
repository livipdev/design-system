import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const CarouselWithAutoplay = (props) => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return <AutoplaySlider {...props} />;
};

export default CarouselWithAutoplay;
