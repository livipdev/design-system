import React from 'react';
import CarouselWithAutoplay from '@livip/core/CarouselWithAutoplay';

import { buildSlides } from './builders';

const Carousel = ({
  play,
  stopOnHover,
  intervalInMilliseconds,
  children,
  variant,
  customClasses,
  ...props
}) => (
  <CarouselWithAutoplay
    {...props}
    play={play}
    cancelOnInteraction={stopOnHover}
    interval={intervalInMilliseconds}
    variant={variant}
    children={buildSlides(children)}
    customClasses={customClasses}
  />
);

export default Carousel;
