import React from 'react';

import MenuListItem from '../MenuListItem';
import MenuLink from '../MenuLink';

import messages from './messages';

export const buildMenuItems = (variant, intl, items, hashmap) => (
  items.map((key) => buildMenuItem(key, variant, intl, hashmap))
);

const buildMenuItem = (key, variant, intl, hashmap) => {
  const item = hashmap[key];
  const message = messages[key];

  return (
    <MenuListItem key={key} selected={variant === key}>
      <MenuLink href={item.link}>
        { intl.formatMessage(message) }
      </MenuLink>
    </MenuListItem>
  );
};
