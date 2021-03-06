import PropTypes from 'prop-types';
import { eventPropTypes } from '@livipdev/containers/EventFilteredList/propTypes';

const propTypes = {
  event: eventPropTypes.isRequired,
  classes: PropTypes.obj,
};

export default propTypes;
