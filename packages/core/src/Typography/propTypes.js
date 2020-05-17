import PropTypes from 'prop-types';

export const intlPropTypes = {
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string,
  classes: PropTypes.obj,
};

const propTypes = {
  message: PropTypes.shape(intlPropTypes),
};

export default propTypes;
