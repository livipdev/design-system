import React from 'react';
import startCase from 'lodash/startCase';

import Typography from '../Typography';
import Link from '../Link';
import propTypes from './propTypes';

const EventCardSingleCategory = ({ classes, location, applyFilter }) => {
  const locationName = startCase(location);
  const onClick = () => applyFilter(location);

  return (
    <Typography variant="caption">
      <Link
        classes={classes}
        onClick={onClick}
        underline="none"
      >
        {locationName}
      </Link>
    </Typography>
  );
};

EventCardSingleCategory.propTypes = propTypes;

export default EventCardSingleCategory;
