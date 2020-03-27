import PropTypes from 'prop-types';
import { MENU_TYPES } from '@livip/containers/MenuMobile/constants';

import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const propTypes = {
  classes: PropTypes.object.isRequired,
  currentMenu: PropTypes.oneOf(MENU_TYPES),
  toggleMenu: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
};

export default propTypes;
