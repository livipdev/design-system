import { defineMessages } from 'react-intl';

import { mainMenuRef } from '../MainMenu/messages';

const mainMenuItemsRef = `${mainMenuRef}.items`;

export default defineMessages({
  tickets: {
    id: `${mainMenuItemsRef}.tickets`,
    defaultMessage: 'Livip Tickets',
  },

  one: {
    id: `${mainMenuItemsRef}.one`,
    defaultMessage: 'Livip One',
  },

  incentive: {
    id: `${mainMenuItemsRef}.incentive`,
    defaultMessage: 'Livip Incentive',
  },

  about: {
    id: `${mainMenuItemsRef}.about`,
    defaultMessage: 'Sobre',
  },

  contact: {
    id: `${mainMenuItemsRef}.contact`,
    defaultMessage: 'Fale conosco',
  },
});
