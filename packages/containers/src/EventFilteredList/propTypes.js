import PropTypes from 'prop-types';
import { availableVariants } from '@livipdev/core/EventList/propTypes';

export const eventPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.instanceOf(Date),
  img: PropTypes.string.isRequired,
  columns: PropTypes.number,
});

const propTypes = {
  events: PropTypes.arrayOf(eventPropTypes).isRequired,
  selectorName: PropTypes.string.isRequired,
  defaultFilter: PropTypes.string,
  variant: PropTypes.oneOf(availableVariants),
};

export default propTypes;
