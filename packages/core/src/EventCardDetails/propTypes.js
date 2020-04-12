import PropTypes from 'prop-types';
import { eventPropTypes } from '@livip/containers/EventFilteredList/propTypes';

const dateFormatPropTypes = {
  weekday: PropTypes.string,
  day: PropTypes.string,
  month: PropTypes.string,
  hour: PropTypes.string,
};

const formatsPropTypes = {
  date: PropTypes.shape(dateFormatPropTypes),
};

const propTypes = {
  event: eventPropTypes.isRequired,
  formats: PropTypes.shape(formatsPropTypes),
  classes: PropTypes.obj,
};

export default propTypes;
