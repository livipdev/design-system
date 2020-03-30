import PropTypes from 'prop-types';
import config from '@livip/config';

const propTypes = {
  classes: PropTypes.object,
  variant: PropTypes.oneOf(config.variants.available),
};

export default propTypes;