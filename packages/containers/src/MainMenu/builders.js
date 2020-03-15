import React from 'react';
import MainMenuItem from '@livip/core/MainMenuItem';

import { MAIN_MENU_ITEMS } from './constants';

export const buildMenuItems = () =>
  Object.entries(MAIN_MENU_ITEMS).map(
    ([label, link]) =>
      <MainMenuItem
        key={label}
        href={link}
      >
        {label}
      </MainMenuItem>
  );
