import { defineMessages } from 'react-intl';
import { subMenuRef } from '../SubMenu/messages';

export const subMenuTravelRef = `${subMenuRef}.travel`;
const subMenuTravelItemsRef = `${subMenuTravelRef}.items`;

export default defineMessages({
  incentive: {
    events: {
      id: `${subMenuTravelItemsRef}.events`,
      defaultMessage: 'Events',
    },

    projects: {
      id: `${subMenuTravelItemsRef}.projects`,
      defaultMessage: 'Projects',
    },
  },
});
