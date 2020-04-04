import PropTypes from 'prop-types';

import Container from '../Container';

export const intlPropTypes = {
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string,
  classes: PropTypes.obj,
};

const propTypes = {
  message: PropTypes.shape(intlPropTypes),
  maxWidth: Container.propTypes.maxWidth,
};

export default propTypes;
