import PropTypes from 'prop-types';
import config from '@livip/config';

const propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(config.variants.available),
};

export default propTypes;
