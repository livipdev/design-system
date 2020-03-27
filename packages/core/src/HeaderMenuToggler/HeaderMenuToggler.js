import React from 'react';
import MenuIcon from '@livip/icons/Menu';

import IconButton from '../IconButton';

import propTypes from './propTypes';

const HeaderMenuToggler = ({ classes, toggleMenu }) => (
  <IconButton classes={classes} onClick={toggleMenu}>
    <MenuIcon />
  </IconButton>
);

HeaderMenuToggler.propTypes = propTypes;

export default HeaderMenuToggler;
