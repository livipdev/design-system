import PropTypes from 'prop-types';
import { MENU_TYPES } from '@livipdev/containers/MenuMobile/constants';
import config from '@livipdev/config';

const propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  classes: PropTypes.object,
  currentMenu: PropTypes.oneOf(MENU_TYPES),
  variant: PropTypes.oneOf(config.variants.available),
};

export default propTypes;
