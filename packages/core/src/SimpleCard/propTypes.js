import PropTypes from 'prop-types';

const contentPropTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  background: PropTypes.string,
};

const propTypes = {
  content: PropTypes.shape(contentPropTypes),
  classes: PropTypes.obj,
  italicDescription: PropTypes.bool,
  gutterX: PropTypes.number,
};

export default propTypes;
