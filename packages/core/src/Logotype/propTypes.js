import PropTypes from 'prop-types';
import config from '@livipdev/config';

const propTypes = {
  classes: PropTypes.object,
  viewBox: PropTypes.string,
  variant: PropTypes.oneOf(config.variants.available),
  width: PropTypes.string,
  rootLogotype: PropTypes.bool,
};

export default propTypes;
