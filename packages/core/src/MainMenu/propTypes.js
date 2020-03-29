import PropTypes from 'prop-types';

import { AVAILABLE_VARIANTS } from '../Logotype/constants';

const propTypes = {
  classes: PropTypes.object.isRequired,
  guttersClass: PropTypes.string,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
  isExiting: PropTypes.bool,
};

export default propTypes;
