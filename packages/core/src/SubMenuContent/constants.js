import config from '@livipdev/config';

const TICKETS = config.variants.tickets;
const ONE = config.variants.one;
const TRAVEL = config.variants.travel;

const EVENTS = 'events';
const PROJECTS = 'projects';

export const TRAVEL_SUBMENU_HASHMAP = {
  [EVENTS]: {
    key: 'events',
    href: '#',
  },
  [PROJECTS]: {
    key: 'projects',
    href: '#',
  },
};

export const TRAVEL_SUBMENU_ORDER = [
  EVENTS,
  PROJECTS,
];

const TRAVEL_SUBMENU = {
  order: TRAVEL_SUBMENU_ORDER,
  hashmap: TRAVEL_SUBMENU_HASHMAP,
};

export const VARIANT_SUBMENUS = {
  [TICKETS]: {},
  [ONE]: {},
  [TRAVEL]: TRAVEL_SUBMENU,
};
