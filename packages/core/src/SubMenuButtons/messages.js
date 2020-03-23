import { defineMessages } from 'react-intl';

import { subMenuRef } from '../SubMenu/messages';

const subMenuButtonsRef = `${subMenuRef}.buttons`;

export default defineMessages({
  proposal: {
    id: `${subMenuButtonsRef}.proposal`,
    defaultMessage: 'Request a proposal',
  },
});
