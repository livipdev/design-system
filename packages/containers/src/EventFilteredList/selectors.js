import { isEventOnCategory } from './validators';

import { FILTER_DEFAULT } from './constants';

export const selectEventsWithCategory = (events, category, defaultCategory=FILTER_DEFAULT) => (
  category === defaultCategory
    ? events
    : events.filter((event) => isEventOnCategory(event, category))
);
