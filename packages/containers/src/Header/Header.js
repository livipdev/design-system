import React, { useState } from 'react';

import AppBar from '@livipdev/core/AppBar';
import HeaderToolbar from '@livipdev/core/HeaderToolbar';
import HeaderMenuToggler from '@livipdev/core/HeaderMenuToggler';
import HeaderDrawer from '@livipdev/core/HeaderDrawer';

import propTypes from './propTypes';
import { DEFAULT_MENU_STATE } from './constants';

const Header = ({ variant, rootLogotype }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(DEFAULT_MENU_STATE);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <AppBar position="fixed" color="transparent">
      <HeaderToolbar variant={variant} rootLogotype={rootLogotype} />
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
