import React from 'react';

import AppBar from '@livip/core/AppBar';
import TopMenu from '@livip/core/TopMenu';
import MainMenu from '@livip/core/MainMenu';
import SubMenu from '@livip/core/SubMenu';

import propTypes from './propTypes';

const Header = ({ variant }) => (
  <AppBar>
    <TopMenu variant={variant} />
    <MainMenu variant={variant} />
    <SubMenu variant={variant} />
  </AppBar>
);

Header.propTypes = propTypes;

export default Header;
