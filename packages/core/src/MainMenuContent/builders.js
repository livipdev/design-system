import { MAIN_MENU_HASHMAP, MAIN_MENU_ORDER } from './constants';

import messages from './messages';

export const buildMainMenu = (variant) => ({
  messages,
  current: variant,
  hashmap: MAIN_MENU_HASHMAP,
  order: MAIN_MENU_ORDER,
});
