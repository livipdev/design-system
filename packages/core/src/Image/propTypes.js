import PropTypes from 'prop-types';

const propTypes = {
  rootImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  classes: PropTypes.obj,
};

export default propTypes;
