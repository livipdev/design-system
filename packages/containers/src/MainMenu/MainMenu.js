import React from 'react';
import Menu from '@livip/core/MainMenu';
import MainMenuList from '@livip/core/MainMenuList';

import propTypes from './propTypes';
import { selectOpenValue } from './selectors';
import { buildMenuItems } from './builders';

const MainMenu = ({ open, width }) => (
  <Menu open={selectOpenValue(open, width)}>
    <MainMenuList>
      { buildMenuItems() }
    </MainMenuList>
  </Menu>
);

MainMenu.propTypes = propTypes;

export default MainMenu;
