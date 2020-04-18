import PropTypes from 'prop-types';
import { intlPropTypes } from '../Typography/propTypes';

const propTypes = {
  message: PropTypes.shape(intlPropTypes).isRequired,
};

export default PropTypes;
