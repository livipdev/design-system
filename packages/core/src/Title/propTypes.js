import PropTypes from 'prop-types';

import Typography from '../Typography';
import { intlPropTypes } from '../Typography/propTypes';

const contentPropTypes = {
  message: PropTypes.shape(intlPropTypes).isRequired,
  variant: Typography.propTypes.variant,
};

const propTypes = {
  title: PropTypes.shape(contentPropTypes),
  subtitle: PropTypes.shape(contentPropTypes),
  classes: PropTypes.obj,
};

export default propTypes;
