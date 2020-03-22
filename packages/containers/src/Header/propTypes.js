import PropTypes from 'prop-types';

import { SCREEN_SIZES } from '@livip/core/styles/theme/constants';
import { AVAILABLE_VARIANTS } from '@livip/core/Logotype/constants';

const propTypes = {
  maxWidth: PropTypes.oneOf(Object.values(SCREEN_SIZES)),
  variant: PropTypes.oneOf(Object.values(AVAILABLE_VARIANTS)),
};

export default propTypes;
