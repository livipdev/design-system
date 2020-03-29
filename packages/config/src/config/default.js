import {
  ROOT,
  TICKETS,
  ONE,
  TRAVEL,
} from './constants';

const configs = {
  variants: {
    [ROOT]: ROOT,
    [TICKETS]: TICKETS,
    [ONE]: ONE,
    [TRAVEL]: TRAVEL,
    available: [
      ROOT,
      TICKETS,
      ONE,
      TRAVEL,
    ],
  },
};

export default configs;
