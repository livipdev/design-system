import PropTypes from 'prop-types';
import { eventPropTypes } from '@livip/containers/EventFilteredList/propTypes';

const propTypes = {
  event: eventPropTypes,
  currentFilter: PropTypes.string,
  filterEvents: PropTypes.func,
  classes: PropTypes.obj,
};

export default propTypes;
