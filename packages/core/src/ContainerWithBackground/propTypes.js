import PropTypes from 'prop-types';

import { AVAILABLE_VARIANTS } from './constants';

const propTypes = {
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS).isRequired,
  classes: PropTypes.object,
  children: PropTypes.node,
};

export default propTypes;
