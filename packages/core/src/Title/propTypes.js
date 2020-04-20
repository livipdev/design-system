import PropTypes from 'prop-types';

import Typography from '../Typography';
import { intlPropTypes } from '../Typography/propTypes';

const messageOptions = [
  PropTypes.string,
  PropTypes.shape(intlPropTypes),
];

const contentPropTypes = {
  message: PropTypes.oneOfType(messageOptions).isRequired,
  variant: Typography.propTypes.variant,
};

const propTypes = {
  title: PropTypes.shape(contentPropTypes),
  subtitle: PropTypes.shape(contentPropTypes),
  suptitle: PropTypes.shape(contentPropTypes),
  classes: PropTypes.obj,
  customClass: PropTypes.string,
};

export default propTypes;
