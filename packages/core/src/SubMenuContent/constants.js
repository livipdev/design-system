import config from '@livipdev/config';

const TICKETS = config.variants.tickets;
const ONE = config.variants.one;
const INCENTIVE = config.variants.incentive;

const EVENTS = 'events';
const PROJECTS = 'projects';

export const INCENTIVE_SUBMENU_HASHMAP = {
  [EVENTS]: {
    key: 'events',
    href: 'events',
  },
  [PROJECTS]: {
    key: 'projects',
    href: 'projects',
  },
};

export const INCENTIVE_SUBMENU_ORDER = [
  EVENTS,
  PROJECTS,
];

const INCENTIVE_SUBMENU = {
  order: INCENTIVE_SUBMENU_ORDER,
  hashmap: INCENTIVE_SUBMENU_HASHMAP,
};

export const VARIANT_SUBMENUS = {
  [TICKETS]: {},
  [ONE]: {},
  [INCENTIVE]: INCENTIVE_SUBMENU,
};
