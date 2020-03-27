import PropTypes from 'prop-types';
import { MENU_TYPES } from '@livip/containers/MenuMobile/constants';

import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const propTypes = {
  currentMenu: PropTypes.oneOf(MENU_TYPES),
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
};

export default propTypes;
