import PropTypes from 'prop-types';
import config from '@livipdev/config';

const propTypes = {
  variant: PropTypes.oneOf(config.variants.available),
  rootLogotype: PropTypes.bool,
};

export default propTypes;
