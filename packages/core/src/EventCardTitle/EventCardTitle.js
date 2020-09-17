import React from 'react';

import Grid from '../Grid';
import Typography from '../Typography';
import EventCardLocation from '../EventCardLocation';
import EventCardActions from '../EventCardActions';

import propTypes from './propTypes';

const EventCardTitle = ({
  classes,
  event,
  toggleSide,
}) => (
  <Grid className={classes.container} container>
    <Grid item>
      <EventCardLocation location={event.location} />
      <Typography variant="h4">
        {event.title}
      </Typography>
    </Grid>

    <Grid className={classes.action} item>
      <EventCardActions toggleSide={toggleSide} />
    </Grid>
  </Grid>
);

EventCardTitle.propTypes = propTypes;

export default EventCardTitle;
