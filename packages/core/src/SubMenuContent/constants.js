import config from '@livipdev/config';

const TICKETS = config.variants.tickets;
const ONE = config.variants.one;
const INCENTIVE = config.variants.incentive;

const NEXT_EVENTS = 'nextEvents';
const EVENTS_HELD = 'eventsHeld';
const EVENTS = 'events';
const LOGIN = 'login';

export const INCENTIVE_SUBMENU_HASHMAP = {
  [NEXT_EVENTS]: {
    key: NEXT_EVENTS,
    href: '/proximos-eventos',
  },
  [EVENTS_HELD]: {
    key: EVENTS_HELD,
    href: '/eventos-realizados',
  },
};

export const INCENTIVE_SUBMENU_ORDER = [
  NEXT_EVENTS,
  EVENTS_HELD,
];

const INCENTIVE_SUBMENU = {
  order: INCENTIVE_SUBMENU_ORDER,
  hashmap: INCENTIVE_SUBMENU_HASHMAP,
};

export const TICKETS_SUBMENU_HASHMAP = {
  [EVENTS]: {
    key: EVENTS,
    href: '/eventos',
  },
  [LOGIN]: {
    key: LOGIN,
    href: '/login',
  },
};

export const TICKETS_SUBMENU_ORDER = [
  EVENTS,
  LOGIN,
];

const TICKETS_SUBMENU = {
  order: TICKETS_SUBMENU_ORDER,
  hashmap: TICKETS_SUBMENU_HASHMAP,
};

export const VARIANT_SUBMENUS = {
  [TICKETS]: {},
  [ONE]: {},
  [INCENTIVE]: INCENTIVE_SUBMENU,
  [TICKETS]: TICKETS_SUBMENU,
};
