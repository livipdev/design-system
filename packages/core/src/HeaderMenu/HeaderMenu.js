import React from 'react';

import Grid from '../Grid';

import { buildMenuItems } from './builders';
import propTypes from './propTypes';

const HeaderMenu = ({
  menu,
  xs,
  justify,
  alignItems,
}) => (
  <Grid xs={xs} alignItems={alignItems} justify={justify} container>
    { buildMenuItems(menu) }
  </Grid>
);

HeaderMenu.propTypes = propTypes;

export default HeaderMenu;
