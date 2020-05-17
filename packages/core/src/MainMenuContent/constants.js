import config from '@livipdev/config';

const TICKETS = config.variants.tickets;
const ONE = config.variants.one;
const TRAVEL = config.variants.travel;
const ABOUT = 'about';
const CONTACT = 'contact';

export const MAIN_MENU_HASHMAP = {
  [TICKETS]: {
    key: 'tickets',
    href: '#',
  },
  [ONE]: {
    key: 'one',
    href: '#',
  },
  [TRAVEL]: {
    key: 'travel',
    href: '#',
  },
  [ABOUT]: {
    key: 'about',
    href: '#',
  },
  [CONTACT]: {
    key: 'contact',
    href: '#',
  },
};

export const MAIN_MENU_ORDER = [
  TICKETS,
  ONE,
  TRAVEL,
];
