import React from 'react';

import { Dots } from '../Carousel';
import Box from '../Box';

import propTypes from './propTypes';

const CarouselDots = ({ classes, customClass, length, value, onChange }) => {
  const className = [
    classes.root,
    customClass,
  ].join(' ');

  return (
    <Box className={className}>
      <Dots
        value={value}
        onChange={onChange}
        number={length}
      />
    </Box>
  );
};

CarouselDots.propTypes = propTypes;

export default CarouselDots;
