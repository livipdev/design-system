import React from 'react';

import MenuListItem from '../MenuListItem';
import MenuLink from '../MenuLink';

import { MAIN_MENU_ORDERED, MAIN_MENU_ITEMS } from './constants';
import messages from './messages';

export const buildMenuItems = (variant, intl, items = MAIN_MENU_ORDERED) => (
  items.map((key) => buildMenuItem(key, variant, intl))
);

const buildMenuItem = (key, variant, intl, hashItems = MAIN_MENU_ITEMS) => {
  const item = hashItems[key];
  const message = messages.items[key];

  return (
    <MenuListItem key={key} selected={variant === key}>
      <MenuLink href={item.link}>
        { intl.formatMessage(message) }
      </MenuLink>
    </MenuListItem>
  );
};
