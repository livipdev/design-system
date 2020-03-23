import React from 'react';

import Box from '../Box';

import propTypes from './propTypes';
import { buildSocialIcons } from './builders';

const TopMenuSocialIcons = ({ classes }) => (
  <Box classes={classes}>
    { buildSocialIcons() }
  </Box>
);

TopMenuSocialIcons.propTypes = propTypes;

export default TopMenuSocialIcons;
