import React, { useState } from 'react';

import PanelWithFilter from '@livipdev/core/PanelWithFilter';
import EventList from '@livipdev/core/EventList';

import { buildTabs } from './builders';
import { selectEventsWithCategory } from './selectors';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const EventFilteredList = ({ events, messages, selectorName, defaultFilter }) => {
  const [filter, setFilter] = useState(defaultFilter);
  const tabs = buildTabs(events, selectorName);
  const filteredEvents = selectEventsWithCategory(events, filter);

  const filterEvents = (_, next) => setFilter(next);

  return (
    <PanelWithFilter
      filter={filter}
      handleChange={filterEvents}
      tabs={tabs}
    >
      <EventList
        events={filteredEvents}
        currentFilter={filter}
        filterEvents={filterEvents}
      />
    </PanelWithFilter>
  );
};

EventFilteredList.propTypes = propTypes;
EventFilteredList.defaultProps = defaultProps;

export default EventFilteredList;
