import { defineMessages } from 'react-intl';

import { topMenuRef } from '../TopMenu/messages';

const topMenuClaimsRef = `${topMenuRef}.claims`

export default defineMessages({
  travel: {
    id: `${topMenuClaimsRef}.travel`,
    defaultMessage: "Make your clients' events an unforgettable experience!",
  },

  contact: {
    id: `${topMenuClaimsRef}.contact`,
    defaultMessage: "Contact us +55 11 9 9999-9900",
  },
});
