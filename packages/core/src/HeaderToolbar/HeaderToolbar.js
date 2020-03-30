import React from 'react';

import Toolbar from '../Toolbar';
import TopMenu from '../TopMenu';
import MainMenu from '../MainMenu';
import SubMenu from '../SubMenu';

import propTypes from './propTypes';

const HeaderToolbar = ({ classes, variant }) => (
  <Toolbar classes={classes} disableGutters>
    <TopMenu variant={variant} guttersClass={classes.gutters} />
    <MainMenu variant={variant} guttersClass={classes.gutters} />
    <SubMenu variant={variant} guttersClass={classes.gutters} />
  </Toolbar>
);

HeaderToolbar.propTypes = propTypes;

export default HeaderToolbar;