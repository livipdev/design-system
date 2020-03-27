import PropTypes from 'prop-types';

const menuPropTypes = {
  order: PropTypes.array.isRequired,
  hashmap: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  current: PropTypes.string,
};

const propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.shape(menuPropTypes).isRequired,
  customClasses: PropTypes.string,
};

export default propTypes;
