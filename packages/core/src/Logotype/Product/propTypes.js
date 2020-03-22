import PropTypes from 'prop-types';
import { AVAILABLE_VARIANTS } from '../constants';

const propTypes = {
  classes: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(AVAILABLE_VARIANTS),
};

export default propTypes;