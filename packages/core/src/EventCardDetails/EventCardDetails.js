import React from 'react';
import { FormattedDate, FormattedRelativeTime } from 'react-intl';
import HistoryIcon from '@livip/icons/History';

import Grid from '../Grid';

import { buildRelativeTimeProps } from './builders';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const EventCardDetails = ({ classes, event, formats }) => (
  <Grid className={classes.container} container>
    <Grid className={classes.item} item>
      <FormattedDate
        value={event.date}
        weekday={formats.date.weekday}
        day={formats.date.day}
        month={formats.date.month}
        hour={formats.date.hour}
      />
    </Grid>

    <Grid className={`${classes.item} ${classes.last}`} item>
      <HistoryIcon className={classes.icon} />
      <FormattedRelativeTime
        {...buildRelativeTimeProps(event.date)}
      />
    </Grid>
  </Grid>
);

EventCardDetails.propTypes = propTypes;
EventCardDetails.defaultProps = defaultProps;

export default EventCardDetails;
