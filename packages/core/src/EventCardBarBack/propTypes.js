import PropTypes from 'prop-types';
import { eventPropTypes } from '@livipdev/containers/EventFilteredList/propTypes';

const propTypes = {
  event: eventPropTypes.isRequired,
  toggleSide: PropTypes.func.isRequired,
};

export default propTypes;
