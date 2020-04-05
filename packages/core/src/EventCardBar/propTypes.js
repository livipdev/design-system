import PropTypes from 'prop-types';
import { eventPropTypes } from '@livip/containers/EventFilteredList/propTypes';

const propTypes = {
  event: eventPropTypes,
  currentFilter: PropTypes.string,
  filterEvent: PropTypes.func,
};

export default propTypes;
