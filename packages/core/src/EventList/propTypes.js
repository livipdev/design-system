import PropTypes from 'prop-types';

import { eventPropTypes } from '@livip/containers/EventFilteredList/propTypes';

const propTypes = {
  events: PropTypes.arrayOf(eventPropTypes),
  columns: PropTypes.int,
  spacingType: PropTypes.string,
  classes: PropTypes.obj,
};

export default propTypes;
