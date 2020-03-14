import React from 'react';

import propTypes from './propTypes';
import MenuList from '../MenuList';

const MainMenuList = ({ children, classes }) => (
  <MenuList className={ classes.primary }>
    { children }
  </MenuList>
);

MainMenuList.propTypes = propTypes;

export default MainMenuList;
