import React from 'react';

import Grid from '../Grid';
import Typography from '../Typography';
import EventCardCategories from '../EventCardCategories';
import EventCardActions from '../EventCardActions';

import propTypes from './propTypes';

const EventCardTitle = ({ classes, event, currentFilter, filterEvents }) => (
  <Grid container>
    <Grid item>
      <EventCardCategories
        categories={event.categories}
        currentFilter={currentFilter}
        filterEvents={filterEvents}
      />
      <Typography variant="h3">
        {event.name}
      </Typography>
    </Grid>

    <Grid className={classes.action} item>
      <EventCardActions />
    </Grid>
  </Grid>
);

EventCardTitle.propTypes = propTypes;

export default EventCardTitle;
