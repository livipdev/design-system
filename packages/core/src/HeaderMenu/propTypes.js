import PropTypes from 'prop-types';

const menuPropTypes = {
  order: PropTypes.array.isRequired,
  hashmap: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
  current: PropTypes.string,
};

const propTypes = {
  menu: PropTypes.shape(menuPropTypes).isRequired,
  classes: PropTypes.object,
  customClasses: PropTypes.string,
};

export default propTypes;
