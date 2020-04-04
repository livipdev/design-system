import PropTypes from 'prop-types';

const tabPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

const propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  tabProps: PropTypes.arrayOf(tabPropTypes).isRequired,
  children: PropTypes.node.isRequired,
};

export default propTypes;
