import React, { useState } from 'react';

import Grid from '@livip/core/Grid';
import MobileMenuHeader from '@livip/core/MobileMenuHeader';
import MobileMenuContent from '@livip/core/MobileMenuContent';

import propTypes from './propTypes';
import {
  MENU_TYPE_DEFAULT,
  MENU_TYPE_MAIN,
} from './constants';

const MenuMobile = ({ variant }) => {
  const [menuType, setMenuType] = useState(MENU_TYPE_DEFAULT);
  const toggleMenu = () => (
    setMenuType(
      menuType === MENU_TYPE_DEFAULT
        ? MENU_TYPE_MAIN
        : MENU_TYPE_DEFAULT
    )
  );

  return (
    <Grid container direction='column' alignItems='center'>
      <MobileMenuHeader
        variant={variant}
        currentMenu={menuType}
        toggleMenu={toggleMenu}
      />
      <MobileMenuContent
        variant={variant}
        currentMenu={menuType}
      />
    </Grid>
  );
};

MenuMobile.propTypes = propTypes;

export default MenuMobile;
