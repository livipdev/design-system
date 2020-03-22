import { defineMessages } from 'react-intl';

import { headerMenuRef } from '@livip/containers/Header/messages';

const mainMenuRef = `${headerMenuRef}.main`;
const mainMenuItemsRef = `${mainMenuRef}.items`;
const mainMenuButtonsRef = `${mainMenuRef}.buttons`;

export default defineMessages({
  items: {
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
  },

  buttons: {
    livipClub: {
      id: `${mainMenuButtonsRef}.livipClub`,
      defaultMessage: 'Livip Club',
    },

    referral: {
      id: `${mainMenuButtonsRef}.referral`,
      defaultMessage: 'Refer to your company',
    },
  },
});
