import config from '@livip/config';

const TICKETS = config.variants.tickets;
const ONE = config.variants.one;
const TRAVEL = config.variants.travel;

export const PROPOSAL = 'proposal';

const TRAVEL_SUBMENU_BUTTONS_ORDER = [
  PROPOSAL,
];

const TRAVEL_SUBMENU_BUTTONS_HASHMAP = {
  [PROPOSAL]: {
    variant: 'text',
    color: 'secondary',
  },
};

const TRAVEL_SUBMENU_BUTTONS = {
  order: TRAVEL_SUBMENU_BUTTONS_ORDER,
  hashmap: TRAVEL_SUBMENU_BUTTONS_HASHMAP,
};

export const SUBMENU_BUTTONS = {
  [TICKETS]: {},
  [ONE]: {},
  [TRAVEL]: TRAVEL_SUBMENU_BUTTONS,
};
