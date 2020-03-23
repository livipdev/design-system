import React from 'react';

import Grid from '../Grid';
import TopMenuClaim from '../TopMenuClaim';
import TopMenuSocialIcons from '../TopMenuSocialIcons';

import propTypes from './propTypes';

const TopMenuContent = ({ variant, ...props }) => (
  <Grid item {...props}>
    <TopMenuClaim variant={variant} />
    <TopMenuSocialIcons />
  </Grid>
);

TopMenuContent.propTypes = propTypes;

export default TopMenuContent;
