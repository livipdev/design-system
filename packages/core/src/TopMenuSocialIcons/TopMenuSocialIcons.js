import React from 'react';

import Box from '../Box';

import SocialIcons from '../SocialIcons';
import propTypes from './propTypes';

const TopMenuSocialIcons = ({ classes }) => (
  <Box className={classes.root}>
    <SocialIcons />
  </Box>
);

TopMenuSocialIcons.propTypes = propTypes;

export default TopMenuSocialIcons;
