import React, { useState } from 'react';
import CardContent from '@livipdev/core/CardContent';
import EventCardBarBack from '@livipdev/core/EventCardBarBack';
import EventCardBarFront from '@livipdev/core/EventCardBarFront';

import propTypes from './propTypes';

const EventCardBar = ({ event, currentFilter, filterEvents }) => {
  const [reversed, setReversed] = useState(false);

  const toggleSide = () => setReversed(!reversed);
  const resetSide = () => setReversed(false);

  return (
    <CardContent onMouseLeave={resetSide}>
      {
        reversed
          ? <EventCardBarBack
              event={event}
              toggleSide={toggleSide}
            />
          : <EventCardBarFront
              event={event}
              currentFilter={currentFilter}
              filterEvents={filterEvents}
              toggleSide={toggleSide}
            />
      }
    </CardContent>
  );
};

EventCardBar.propTypes = propTypes;

export default EventCardBar;
