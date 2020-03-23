import { defineMessages } from 'react-intl';
import { subMenuRef } from '../SubMenu';

export const subMenuTravelRef = `${subMenuRef}.travel`;
const subMenuTravelItemsRef = `${subMenuTravelRef}.items`;

export default defineMessages({
  travel: {
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
