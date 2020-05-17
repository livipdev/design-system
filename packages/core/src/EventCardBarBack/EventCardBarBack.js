import React from 'react';
import InstagramIcon from '@livipdev/icons/Instagram';

import Grid from '../Grid';
import EventCardShare from '../EventCardShare';

import propTypes from './propTypes';

const EventCardBarBack = ({ classes, event }) => (
  <Grid
    className={classes.grid}
    justify="center"
    container
  >
    <EventCardShare event={event}/>
  </Grid>
);

EventCardBarBack.propTypes = propTypes;

export default EventCardBarBack;
