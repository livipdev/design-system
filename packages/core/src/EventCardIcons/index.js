import React from 'react';
import ShareIcon from '@livip/icons/share';

import IconWithLink from '../IconWithLink';

const EventCardActions = () => (
  <CardContent>
    <EventCardTitle
      event={event}
      currentFilter={currentFilter}
      filterEvents={filterEvents}
    />
  </CardContent>
);

EventCardActions.propTypes = propTypes;

export default EventCardActions;
