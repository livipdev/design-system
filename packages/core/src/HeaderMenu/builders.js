import React from 'react';
import { useIntl } from 'react-intl';

import MenuListItem from '../MenuListItem';
import MenuLink from '../MenuLink';

export const buildMenuItems = (menu) => {
  const intl = useIntl();
  const items = menu.order.map((key) => buildMenuItem(key, intl, menu));

  return items;
};

const buildMenuItem = (key, intl, menu) => {
  const item = menu.hashmap[key];
  const message = menu.messages[key];

  return (
    <MenuListItem key={key} selected={menu.current === key}>
      <MenuLink
        href={item.link}
        color="primary"
        underline="none"
      >
        { intl.formatMessage(message) }
      </MenuLink>
    </MenuListItem>
  );
};
