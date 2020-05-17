import PropTypes from 'prop-types';
import config from '@livipdev/config';

const propTypes = {
  classes: PropTypes.object,
  guttersClass: PropTypes.string,
  variant: PropTypes.oneOf(config.variants.available),
};

export default propTypes;
