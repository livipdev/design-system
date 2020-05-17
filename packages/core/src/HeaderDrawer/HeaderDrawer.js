import React from 'react';

import MenuMobile from '@livipdev/containers/MenuMobile';

import SwipeableDrawer from '../SwipeableDrawer';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const HeaderDrawer = ({ classes, anchor, isMenuOpen, toggleMenu, variant }) => (
  <SwipeableDrawer
    classes={classes}
    anchor={anchor}
    open={isMenuOpen}
    onClose={toggleMenu}
    onOpen={toggleMenu}
  >
    <MenuMobile variant={variant} />
  </SwipeableDrawer>
);

HeaderDrawer.propTypes = propTypes;
HeaderDrawer.defaultProps = defaultProps;

export default HeaderDrawer;
