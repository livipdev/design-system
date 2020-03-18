import PropTypes from 'prop-types';

import { AVAILABLE_VARIANTS } from './constants';

const propTypes = {
  classes: PropTypes.object.isRequired,
  viewBox: PropTypes.string,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
};

export default propTypes;
