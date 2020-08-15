import PropTypes from 'prop-types';

import { eventPropTypes } from '@livipdev/containers/EventFilteredList/propTypes';

export const availableVariants = ['event', 'project'];

const propTypes = {
  events: PropTypes.arrayOf(eventPropTypes),
  currentFilter: PropTypes.string,
  filterEvents: PropTypes.func,
  columns: PropTypes.int,
  cellHeight: PropTypes.int,
  spacingType: PropTypes.string,
  classes: PropTypes.obj,
  customClass: PropTypes.string,
  variant: PropTypes.oneOf(availableVariants),
  hideDate: PropTypes.bool,
};

export default propTypes;
