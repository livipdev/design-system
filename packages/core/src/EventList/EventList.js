import React from 'react';

import GridList from '../GridList';
import GridListTile from '../GridListTile';
import EventCard from '../EventCard';
import useTheme from '../styles/useTheme';
import useWidth from '../styles/useWidth';

import {
  selectColsBasedOnViewport,
  selectSpaceBasedOnViewport,
} from './selectors';
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
  const viewport = useWidth();
  const spacing = selectSpaceBasedOnViewport(theme, viewport);
  const cols = selectColsBasedOnViewport(columns, viewport)

  return (
    <GridList
      classes={classes}
      cols={cols}
      cellHeight={cellHeight}
      spacing={spacing}
    >
      {
        events.map((event) => (
          <GridListTile key={event.id} className={classes.tile}>
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
