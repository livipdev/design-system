import React from 'react';

import Grid from '../Grid';

import { buildMenuItems } from './builders';
import propTypes from './propTypes';

const HeaderMenu = ({ classes, menu }) => (
  <Grid item classes={classes}>
    { buildMenuItems(menu) }
  </Grid>
);

HeaderMenu.propTypes = propTypes;

export default HeaderMenu;
