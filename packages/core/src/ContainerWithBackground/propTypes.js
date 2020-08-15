import PropTypes from 'prop-types';

const propTypes = {
  background: PropTypes.string.isRequired,
  classes: PropTypes.object,
  children: PropTypes.node,
  variant: PropTypes.string,
  customClass: PropTypes.string,
  backgroundDarkMask: PropTypes.bool,
};

export default propTypes;
