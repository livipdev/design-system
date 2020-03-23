import React from 'react';

import Box from '../Box';

import { buildMenuItems } from './builders';
import propTypes from './propTypes';

const HeaderMenu = ({ menu, ...props }) => (
  <Box {...props}>
    { buildMenuItems(menu) }
  </Box>
);

HeaderMenu.propTypes = propTypes;

export default HeaderMenu;
