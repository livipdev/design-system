import React from 'react';

import Box from '../Box';
import Divider from '../Divider';
import EventCardTitle from '../EventCardTitle';
import EventCardDetails from '../EventCardDetails';

import propTypes from './propTypes';

const EventCardBarFront = ({
  classes,
  event,
  currentFilter,
  filterEvents,
  toggleSide,
}) => (
  <Box className={classes.box}>
    <EventCardTitle
      event={event}
      currentFilter={currentFilter}
      filterEvents={filterEvents}
      toggleSide={toggleSide}
    />
    <Divider />
    <EventCardDetails
      event={event}
    />
  </Box>
);

EventCardBarFront.propTypes = propTypes;

export default EventCardBarFront;
