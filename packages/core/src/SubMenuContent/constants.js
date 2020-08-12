import config from '@livipdev/config';

const TICKETS = config.variants.tickets;
const ONE = config.variants.one;
const INCENTIVE = config.variants.incentive;

const NEXT_EVENTS = 'nextEvents';
const EVENTS_HELD = 'eventsHeld';

export const INCENTIVE_SUBMENU_HASHMAP = {
  [NEXT_EVENTS]: {
    key: 'nextEvents',
    href: 'proximos-eventos',
  },
  [EVENTS_HELD]: {
    key: 'eventsHeld',
    href: 'eventos-realizados',
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

export const VARIANT_SUBMENUS = {
  [TICKETS]: {},
  [ONE]: {},
  [INCENTIVE]: INCENTIVE_SUBMENU,
};
