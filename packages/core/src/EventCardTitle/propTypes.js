import PropTypes from 'prop-types';
import { eventPropTypes } from '@livip/containers/EventFilteredList/propTypes';

const propTypes = {
  event: eventPropTypes.isRequired,
  currentFilter: PropTypes.string,
  filterEvent: PropTypes.func,
  toggleSide: PropTypes.func,
  classes: PropTypes.obj,
};

export default propTypes;