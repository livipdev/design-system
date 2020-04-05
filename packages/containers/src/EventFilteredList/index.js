import React, { useState } from 'react';

import PanelWithFilter from '@livip/core/PanelWithFilter';
import EventList from '@livip/core/EventList';

import { buildTabs } from './builders';
import { selectEventsWithCategory } from './selectors';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const EventFilteredList = ({ events, selectorName, defaultFilter }) => {
  const [filter, setFilter] = useState(defaultFilter);
  const tabs = buildTabs(events, selectorName);
  const filteredEvents = selectEventsWithCategory(events, filter);

  const handleChange = (_, next) => setFilter(next);

  return (
    <PanelWithFilter
      filter={filter}
      handleChange={handleChange}
      tabs={tabs}
    >
      <EventList events={filteredEvents} />
    </PanelWithFilter>
  );
};

EventFilteredList.propTypes = propTypes;
EventFilteredList.defaultProps = defaultProps;

export default EventFilteredList;
