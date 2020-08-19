import { defineMessages } from 'react-intl';

import { subMenuTravelRef } from '../SubMenuContent/messages';
import { PROPOSAL } from './constants';

const subMenuTravelButtonsRef = `${subMenuTravelRef}.buttons`;

export default defineMessages({
  incentive: {
    [PROPOSAL]: {
      id: `${subMenuTravelButtonsRef}.proposal`,
      defaultMessage: 'Solicitar orçamento',
    },
  },
});
