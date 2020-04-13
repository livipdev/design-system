import React from 'react';

import Card from '../Card';
import CardMedia from '../CardMedia';
import EventCardBar from '@livip/containers/EventCardBar';

import propTypes from './propTypes';

const EventCard = ({ classes, event, currentFilter, filterEvents }) => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={event.img}
      title={event.name}
    />
    <EventCardBar
      event={event}
      currentFilter={currentFilter}
      filterEvents={filterEvents}
    />
  </Card>
);

EventCard.propTypes = propTypes;

export default EventCard;
