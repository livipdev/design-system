import React from 'react';

import Toolbar from '../Toolbar';
import MainMenu from '../MainMenu';
import SubMenu from '../SubMenu';

import propTypes from './propTypes';

const HeaderToolbar = ({ classes, variant, rootLogotype }) => (
  <Toolbar classes={classes} disableGutters>
    <MainMenu variant={variant} guttersClass={classes.gutters} rootLogotype={rootLogotype} />
    <SubMenu variant={variant} guttersClass={classes.gutters} />
  </Toolbar>
);

HeaderToolbar.propTypes = propTypes;

export default HeaderToolbar;
