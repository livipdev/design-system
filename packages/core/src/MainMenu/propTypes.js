import PropTypes from 'prop-types';

import { SCREEN_SIZES } from '../styles/theme/constants';
import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const propTypes = {
  classes: PropTypes.object.isRequired,
  maxWidth: PropTypes.oneOf(Object.values(SCREEN_SIZES)),
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
};

export default propTypes;
