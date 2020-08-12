import React from 'react';

import GridList from '../GridList';
import GridListTile from '../GridListTile';
import EventCard from '../EventCard';
import ProjectCard from '../ProjectCard';
import {
  useTheme,
  useWidth,
} from '../styles';

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
  customClass,
  variant,
}) => {
  const theme = useTheme();
  const viewport = useWidth();
  const spacing = selectSpaceBasedOnViewport(theme, viewport);
  const cols = selectColsBasedOnViewport(columns, viewport)
  const mergedClasses = {
    ...classes,
    root: [
      classes.root,
      customClass,
    ].join(' '),
  };

  return (
    <GridList
      classes={mergedClasses}
      cols={variant === 'project' ? 2 : cols}
      cellHeight={cellHeight}
      spacing={spacing}
    >
      {
        events.map((event) => (
          <GridListTile key={event.id} className={mergedClasses.tile}>
            {
              variant === 'project'
                ? <ProjectCard {...event} />
                : <EventCard
                    event={event}
                    currentFilter={currentFilter}
                    filterEvents={filterEvents}
                  />
            }
          </GridListTile>
        ))
      }
    </GridList>
  );
};

EventList.propTypes = propTypes;
EventList.defaultProps = defaultProps;

export default EventList;
