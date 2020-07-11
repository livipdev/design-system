import PropTypes from 'prop-types';

const propTypes = {
  classes: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    wrapper: PropTypes.string,
  }),
  date: PropTypes.string,
  title: PropTypes.object,
};

export default propTypes;
