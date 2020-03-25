import React from 'react';

import Box from '../Box';

import { buildMenuItems } from './builders';
import propTypes from './propTypes';

const HeaderMenu = ({ classes, menu }) => (
  <Box classes={classes}>
    { buildMenuItems(menu) }
  </Box>
);

HeaderMenu.propTypes = propTypes;

export default HeaderMenu;
