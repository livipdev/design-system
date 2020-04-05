import React from 'react';
import startCase from 'lodash/startCase';

import Link from '../Link';
import propTypes from './propTypes';

const EventCardSingleCategory = ({ classes, category, applyFilter }) => {
  const categoryName = startCase(category);
  const onClick = () => applyFilter(category);

  return (
    <Link
      classes={classes}
      onClick={onClick}
      underline="none"
    >
      {categoryName}
    </Link>
  );
};

EventCardSingleCategory.propTypes = propTypes;

export default EventCardSingleCategory;
