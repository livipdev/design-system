import React from 'react';

import Box from '../Box';

import { buildSocialIcons } from './builders';
import propTypes from './propTypes';

const TopMenuSocialIcons = ({ classes }) => (
  <Box classes={classes}>
    { buildSocialIcons() }
  </Box>
);

TopMenuSocialIcons.propTypes = propTypes;

export default TopMenuSocialIcons;
