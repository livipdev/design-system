import PropTypes from 'prop-types';

import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
};

export default propTypes;
