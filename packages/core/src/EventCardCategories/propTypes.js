import PropTypes from 'prop-types';

const propTypes = {
  categories: PropTypes.string.isRequired,
  currentFilter: PropTypes.string,
  filterEvents: PropTypes.func,
};

export default propTypes;
