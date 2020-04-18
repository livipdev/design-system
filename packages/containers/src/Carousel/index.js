import React from 'react';
import CarouselWithAutoplay from '@livip/core/CarouselWithAutoplay';

import { buildSlides } from './builders';

const Carousel = ({
  play,
  stopOnHover,
  intervalInMilliseconds,
  children,
}) => (
  <CarouselWithAutoplay
    play={play}
    cancelOnInteraction={stopOnHover}
    interval={intervalInMilliseconds}
    children={buildSlides(children)}
  />
);

export default Carousel;
