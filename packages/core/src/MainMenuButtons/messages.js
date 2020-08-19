import { defineMessages } from 'react-intl';

import { mainMenuRef } from '../MainMenu/messages';

const mainMenuButtonsRef = `${mainMenuRef}.buttons`;

export default defineMessages({
  livipClub: {
    id: `${mainMenuButtonsRef}.livipClub`,
    defaultMessage: 'Clube Livip',
  },

  referral: {
    id: `${mainMenuButtonsRef}.referral`,
    defaultMessage: 'Indique para sua empresa',
  },
});
