import ReactCarousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';

import styled from '../styles/styled';
import propTypes from './propTypes';

const Carousel = styled(ReactCarousel)(({
  gutterX,
}) => ({
  marginLeft: `${gutterX}vw`,
  marginRight: `${gutterX}vw`,
}));

ReactCarousel.propTypes = {
  ...propTypes,
  ...ReactCarousel.propTypes
};

export {
  Carousel as default,
  Dots,
  slidesToShowPlugin,
};
