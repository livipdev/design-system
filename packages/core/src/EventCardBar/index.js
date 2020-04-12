import React from 'react';

import Divider from '../Divider';
import CardContent from '../CardContent';
import EventCardTitle from '../EventCardTitle';
import EventCardDetails from '../EventCardDetails';

import propTypes from './propTypes';

const EventCardBar = ({ event, currentFilter, filterEvents }) => (
  <CardContent>
    <EventCardTitle
      event={event}
      currentFilter={currentFilter}
      filterEvents={filterEvents}
    />
    <Divider />
    <EventCardDetails
      event={event}
    />
  </CardContent>
);

EventCardBar.propTypes = propTypes;

export default EventCardBar;
