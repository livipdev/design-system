import React from 'react';
import MainMenuList from '@livip/core/MainMenuList';

import { buildMenuItems } from './builders';

const MainMenu = () => (
  <MainMenuList>
    { buildMenuItems() }
  </MainMenuList>
);

export default MainMenu;
