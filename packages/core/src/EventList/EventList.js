import React from 'react';

import GridList from '../GridList';
import GridListTile from '../GridListTile';
import EventCard from '../EventCard';
import useTheme from '../styles/useTheme';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const EventList = ({
  classes,
  events,
  currentFilter,
  filterEvents,
  columns,
  cellHeight,
  spacingType,
}) => {
  const theme = useTheme();
  const spacing = theme.spaces.loose.value;

  return (
    <GridList
      classes={classes}
      cols={columns}
      cellHeight={cellHeight}
      spacing={spacing}
    >
      {
        events.map((event) => (
          <GridListTile key={event.id}>
            <EventCard
              event={event}
              currentFilter={currentFilter}
              filterEvents={filterEvents}
            />
          </GridListTile>
        ))
      }
    </GridList>
  );
};

EventList.propTypes = propTypes;
EventList.defaultProps = defaultProps;

export default EventList;
