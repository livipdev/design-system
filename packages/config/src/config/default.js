import {
  ROOT,
  TICKETS,
  ONE,
  INCENTIVE,
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
};

export default configs;
