import React from 'react';

import Box from '../Box';

import propTypes from './propTypes';
import { buildVariantButtons } from './builders';

const SubMenuButtons = ({ variant, classes }) => (
  <Box classes={classes}>
    { buildVariantButtons(variant) }
  </Box>
);

SubMenuButtons.propTypes = propTypes;

export default SubMenuButtons;
