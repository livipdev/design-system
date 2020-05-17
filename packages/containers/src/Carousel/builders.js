import React from 'react';
import CarouselSlide from '@livipdev/core/CarouselSlide';

export const buildSlides = (slides) => (
  slides.map(buildSingleSlide)
);

const buildSingleSlide = (slide) => (
  <CarouselSlide children={slide} />
);
