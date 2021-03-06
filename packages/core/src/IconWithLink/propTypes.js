import PropTypes from 'prop-types';

const propTypes = {
  href: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  className: PropTypes.string,
  dataAction: PropTypes.string,
};

export default propTypes;
