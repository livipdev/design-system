import React, { useState } from 'react';

import PanelWithFilter from '@livip/core/PanelWithFilter';

import { buildTabs } from './builders';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const EventList = ({ events, selectorName, defaultFilter }) => {
  const [filter, setFilter] = useState(defaultFilter);
  const tabs = buildTabs(events, selectorName);

  const handleChange = (_, next) => setFilter(next);

  return (
    <PanelWithFilter
      value={filter}
      handleChange={handleChange}
      tabs={tabs}
    >
      <div>Ok</div>
    </PanelWithFilter>
  );
};

EventList.propTypes = propTypes;
EventList.defaultProps = defaultProps;

export default EventList;
