import PropTypes from 'prop-types';
import { MENU_TYPES } from '@livipdev/containers/MenuMobile/constants';

const propTypes = {
  classes: PropTypes.object,
  currentMenu: PropTypes.oneOf(MENU_TYPES),
  toggleMenu: PropTypes.func.isRequired,
};

export default propTypes;
