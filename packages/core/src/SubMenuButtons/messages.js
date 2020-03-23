import { defineMessages } from 'react-intl';

import { subMenuTravelRef } from '../SubMenuContent/messages';
import { PROPOSAL } from './constants';

const subMenuTravelButtonsRef = `${subMenuTravelRef}.buttons`;

export default defineMessages({
  travel: {
    [PROPOSAL]: {
      id: `${subMenuTravelButtonsRef}.proposal`,
      defaultMessage: 'Request a proposal',
    },
  },
});
