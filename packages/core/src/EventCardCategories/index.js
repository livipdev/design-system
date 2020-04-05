import React from 'react';

import Typography from '../Typography';
import EventCardSingleCategory from '../EventCardSingleCategory';

import propTypes from './propTypes';

const EventCardCategories = ({ categories, currentFilter, filterEvents }) => {
  const applyFilter = (newFilter) => filterEvents(currentFilter, newFilter);

  return (
    <Typography variant="caption">
      {
        categories.map((category) => (
          <EventCardSingleCategory
            category={category}
            applyFilter={applyFilter}
          />
        ))
      }
    </Typography>
  );
};

EventCardCategories.propTypes = propTypes;

export default EventCardCategories;
