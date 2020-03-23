import { VARIANT_SUBMENUS } from './constants';

import messages from './messages';

export const buildSubMenu = (variant) => ({
  current: variant,
  messages: messages[variant],
  hashmap: VARIANT_SUBMENUS[variant].hashmap,
  order: VARIANT_SUBMENUS[variant].order,
});
