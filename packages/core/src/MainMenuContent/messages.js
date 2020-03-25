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

  travel: {
    id: `${mainMenuItemsRef}.travel`,
    defaultMessage: 'Livip Travel',
  },

  about: {
    id: `${mainMenuItemsRef}.about`,
    defaultMessage: 'About us',
  },

  contact: {
    id: `${mainMenuItemsRef}.contact`,
    defaultMessage: 'Get in touch',
  },
});
