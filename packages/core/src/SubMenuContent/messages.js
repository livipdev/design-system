import { defineMessages } from 'react-intl';
import { subMenuRef } from '../SubMenu/messages';

export const subMenIncentiveRef = `${subMenuRef}.incentive`;
const subMenuIncentiveItemsRef = `${subMenIncentiveRef}.items`;

export const subMenTicketsRef = `${subMenuRef}.tickets`;
const subMenuTicketsItemsRef = `${subMenTicketsRef}.items`;

export default defineMessages({
  incentive: {
    nextEvents: {
      id: `${subMenuIncentiveItemsRef}.next_events`,
      defaultMessage: 'Próximos eventos',
    },

    eventsHeld: {
      id: `${subMenuIncentiveItemsRef}.events_held`,
      defaultMessage: 'Eventos realizados',
    },
  },

  tickets: {
    events: {
      id: `${subMenuTicketsItemsRef}.events`,
      defaultMessage: 'Eventos',
    },

    login: {
      id: `${subMenuIncentiveItemsRef}.login`,
      defaultMessage: 'Login',
    },
  },
});
