import config from '@livipdev/config';

const TICKETS = config.variants.tickets;
const ONE = config.variants.one;
const INCENTIVE = config.variants.incentive;
const ABOUT = 'about';
const CONTACT = 'contact';

export const MAIN_MENU_HASHMAP = {
  [TICKETS]: {
    key: 'tickets',
    href: 'https://pwa-tickets.vercel.app',
  },
  [ONE]: {
    key: 'one',
    href: 'https://pwa-one.vercel.app',
  },
  [INCENTIVE]: {
    key: 'incentive',
    href: 'https://pwa-incentive.vercel.app',
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
  INCENTIVE,
];
