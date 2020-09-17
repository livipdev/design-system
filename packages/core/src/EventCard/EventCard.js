import React from 'react';

import Card from '../Card';
import CardMedia from '../CardMedia';
import EventCardBar from '@livipdev/containers/EventCardBar';

import EventCardCategories from '../EventCardCategories';
import propTypes from './propTypes';

const EventCard = ({ classes, event, currentFilter, filterEvents }) => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={event.img}
      title={event.title}
    />
    <EventCardBar event={event} />
    <EventCardCategories
      categories={event.categories}
      currentFilter={currentFilter}
      filterEvents={filterEvents}
    />
  </Card>
);

EventCard.propTypes = propTypes;

export default EventCard;
