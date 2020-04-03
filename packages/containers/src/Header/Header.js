import React, { useState } from 'react';

import AppBar from '@livip/core/AppBar';
import HeaderToolbar from '@livip/core/HeaderToolbar';
import HeaderMenuToggler from '@livip/core/HeaderMenuToggler';
import HeaderDrawer from '@livip/core/HeaderDrawer';

import propTypes from './propTypes';
import { DEFAULT_MENU_STATE } from './constants';

const Header = ({ variant }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(DEFAULT_MENU_STATE);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <AppBar position="fixed" color="transparent">
      <HeaderToolbar variant={variant} />
      <HeaderMenuToggler toggleMenu={toggleMenu} />
      <HeaderDrawer
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        variant={variant}
      />
    </AppBar>
  );
};

Header.propTypes = propTypes;

export default Header;
