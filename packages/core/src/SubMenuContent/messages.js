import { defineMessages } from 'react-intl';
import { subMenuRef } from '../SubMenu/messages';

export const subMenuTravelRef = `${subMenuRef}.travel`;
const subMenuTravelItemsRef = `${subMenuTravelRef}.items`;

export default defineMessages({
  incentive: {
    nextEvents: {
      id: `${subMenuTravelItemsRef}.next_events`,
      defaultMessage: 'Próximos eventos',
    },

    eventsHeld: {
      id: `${subMenuTravelItemsRef}.events_held`,
      defaultMessage: 'Eventos realizados',
    },
  },
});
