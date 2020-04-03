import PropTypes from 'prop-types';

export const intlProptypes = {
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string,
  classes: PropTypes.obj,
};

const propTypes = {
  message: PropTypes.shape(intlProptypes),
};

export default propTypes;
