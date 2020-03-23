import { defineMessages } from 'react-intl';

import { mainMenuRef } from '../MainMenu/messages';

const mainMenuButtonsRef = `${mainMenuRef}.buttons`;

export default defineMessages({
  livipClub: {
    id: `${mainMenuButtonsRef}.livipClub`,
    defaultMessage: 'Livip Club',
  },

  referral: {
    id: `${mainMenuButtonsRef}.referral`,
    defaultMessage: 'Refer to your company',
  },
});
