import React from 'react';

import Card from '../Card';
import CardContent from '../CardContent';

import propTypes from './propTypes';

const EventCard = ({ event }) => (
  <Card>
    <CardContent>
      {event.name}
    </CardContent>
  </Card>
);

EventCard.propTypes = propTypes;

export default EventCard;
