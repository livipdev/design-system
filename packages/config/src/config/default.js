import {
  ROOT,
  TICKETS,
  ONE,
  INCENTIVE,
  ROOT_URL,
  TICKETS_URL,
  ONE_URL,
  INCENTIVE_URL,
} from './constants';

const configs = {
  variants: {
    [ROOT]: ROOT,
    [TICKETS]: TICKETS,
    [ONE]: ONE,
    [INCENTIVE]: INCENTIVE,
    available: [
      ROOT,
      TICKETS,
      ONE,
      INCENTIVE,
    ],
  },

  urls: {
    [ROOT]: ROOT_URL,
    [TICKETS]: TICKETS_URL,
    [ONE]: ONE_URL,
    [INCENTIVE]: INCENTIVE_URL,
  },
};

export default configs;
