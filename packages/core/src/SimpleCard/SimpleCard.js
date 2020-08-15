import React from 'react';

import Card from '../Card';
import CardContent from '../CardContent';
import CardMedia from '../CardMedia';
import Typography from '../Typography';

import propTypes from './propTypes';

const EventCard = ({ classes, content }) => (
  <Card className={classes.card}>
    <CardMedia
      className={classes.media}
      image={content.background}
    />

    <CardContent className={classes.content}>
      <Typography variant='h3' className={classes.title}>
        {content.title}
      </Typography>

      <Typography className={classes.description}>
        {content.description}
      </Typography>
    </CardContent>
  </Card>
);

EventCard.propTypes = propTypes;

export default EventCard;
