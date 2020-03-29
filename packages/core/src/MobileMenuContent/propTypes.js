import PropTypes from 'prop-types';
import { MENU_TYPES } from '@livip/containers/MenuMobile/constants';
import config from '@livip/config';

const propTypes = {
  currentMenu: PropTypes.oneOf(MENU_TYPES),
  variant: PropTypes.oneOf(config.variants.available),
};

export default propTypes;
