import { defineMessages } from 'react-intl';

import { topMenuRef } from '../TopMenu/messages';

const topMenuClaimsRef = `${topMenuRef}.claims`;

export default defineMessages({
  incentive: {
    id: `${topMenuClaimsRef}.incentivel`,
    defaultMessage: "Torne os eventos do seus clientes em experiências inesqueciveis!",
  },

  contact: {
    id: `${topMenuClaimsRef}.contact`,
    defaultMessage: 'Entre em contato conosco (11) 9 9999-9900',
  },
});
