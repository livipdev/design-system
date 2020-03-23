import { defineMessages } from 'react-intl';
import { headerMenuRef } from '@livip/containers/Header/messages';

export const subMenuRef = `${headerMenuRef}.main`;
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
