import PropTypes from 'prop-types';
import { eventPropTypes } from '@livip/containers/EventFilteredList/propTypes';

const propTypes = {
  event: eventPropTypes.isRequired,
  toggleSide: PropTypes.func.isRequired,
};

export default propTypes;
