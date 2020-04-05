import React from 'react';

import CardContent from '../CardContent';
import EventCardTitle from '../EventCardTitle';

import propTypes from './propTypes';

const EventCardBar = ({ classes, event, currentFilter, filterEvents }) => (
  <CardContent>
    <EventCardTitle
      event={event}
      currentFilter={currentFilter}
      filterEvents={filterEvents}
    />
  </CardContent>
);

EventCardBar.propTypes = propTypes;

export default EventCardBar;
