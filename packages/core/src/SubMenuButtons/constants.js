import config from '@livipdev/config';

const TICKETS = config.variants.tickets;
const ONE = config.variants.one;
const INCENTIVE = config.variants.incentive;

export const PROPOSAL = 'proposal';

const INCENTIVE_SUBMENU_BUTTONS_ORDER = [
  PROPOSAL,
];

const INCENTIVE_SUBMENU_BUTTONS_HASHMAP = {
  [PROPOSAL]: {
    variant: 'text',
    color: 'secondary',
  },
};

const INCENTIVE_SUBMENU_BUTTONS = {
  order: INCENTIVE_SUBMENU_BUTTONS_ORDER,
  hashmap: INCENTIVE_SUBMENU_BUTTONS_HASHMAP,
};

export const SUBMENU_BUTTONS = {
  [TICKETS]: {},
  [ONE]: {},
  [INCENTIVE]: INCENTIVE_SUBMENU_BUTTONS,
};
