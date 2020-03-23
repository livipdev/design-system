import { defineMessages } from 'react-intl';
import { headerMenuRef } from '@livip/containers/Header/messages';

export const subMenuRef = `${headerMenuRef}.main`;

const subMenuTravelRef = `${subMenuRef}.travel`;

export default defineMessages({
  travel: {
    events: {
      id: `${subMenuTravelRef}.events`,
      defaultMessage: 'Events',
    },

    projects: {
      id: `${subMenuTravelRef}.projects`,
      defaultMessage: 'Projects',
    },
  }
});
