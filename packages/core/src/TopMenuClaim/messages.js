import { defineMessages } from 'react-intl';

import { topMenuRef } from '../TopMenu/messages';

const topMenuClaimsRef = `${topMenuRef}.claims`;

export default defineMessages({
  incentive: {
    id: `${topMenuClaimsRef}.incentivel`,
    defaultMessage: "Make your clients' events an unforgettable experience!",
  },

  contact: {
    id: `${topMenuClaimsRef}.contact`,
    defaultMessage: 'Contact us +55 11 9 9999-9900',
  },
});
