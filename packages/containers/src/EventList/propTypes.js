import PropTypes from 'prop-types';

const eventPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
});

const propTypes = {
  events: PropTypes.arrayOf(eventPropTypes).isRequired,
  selectorName: PropTypes.string.isRequired,
  defaultFilter: PropTypes.string,
};

export default propTypes;
