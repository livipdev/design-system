import PropTypes from 'prop-types';
import { MENU_TYPES } from '@livip/containers/MenuMobile/constants';
import config from '@livip/config';

const propTypes = {
  classes: PropTypes.object.isRequired,
  currentMenu: PropTypes.oneOf(MENU_TYPES),
  toggleMenu: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(config.variants.available),
};

export default propTypes;
