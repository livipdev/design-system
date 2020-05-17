import PropTypes from 'prop-types';
import { VARIANTS } from '@livipdev/containers/Carousel/constants';

const propTypes = {
  classes: PropTypes.obj,
  customClasses: PropTypes.obj,
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
};

export default propTypes;
