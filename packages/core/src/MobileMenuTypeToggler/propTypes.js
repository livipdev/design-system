import PropTypes from 'prop-types';
import { MENU_TYPES } from '@livip/containers/MenuMobile/constants';

const propTypes = {
  classes: PropTypes.object.isRequired,
  currentMenu: PropTypes.oneOf(MENU_TYPES),
  toggleMenu: PropTypes.func.isRequired,
};

export default propTypes;
