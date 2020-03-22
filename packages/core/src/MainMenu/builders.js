import React from 'react';
import MenuListItem from '@livip/core/MenuListItem';
import MenuLink from '@livip/core/MenuLink';

import { MAIN_MENU_ITEMS } from './constants';

export const buildMenuItems = (variant) =>
  Object.entries(MAIN_MENU_ITEMS).map(
    ([label, options]) => (
      <MenuListItem key={options.key} selected={variant === options.key}>
        <MenuLink href={options.link}>{label}</MenuLink>
      </MenuListItem>
    )
  );
