import React from 'react';
import MainMenuItem from '@livip/core/MainMenuItem';
import MainMenuLink from '@livip/core/MainMenuLink';

import { MAIN_MENU_ITEMS } from './constants';

export const buildMenuItems = (variant) =>
  Object.entries(MAIN_MENU_ITEMS).map(
    ([label, options]) => (
      <MainMenuItem key={options.key} active={variant === options.key}>
        <MainMenuLink href={options.link}>{label}</MainMenuLink>
      </MainMenuItem>
    )
  );
