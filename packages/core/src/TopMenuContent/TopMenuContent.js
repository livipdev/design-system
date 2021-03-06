import React from 'react';

import Grid from '../Grid';
import TopMenuClaim from '../TopMenuClaim';
import TopMenuSocialIcons from '../TopMenuSocialIcons';

import propTypes from './propTypes';

const TopMenuContent = ({ classes, variant }) => (
  <Grid item classes={classes} lg={12} xs={12}>
    <TopMenuClaim variant={variant} />
    <TopMenuSocialIcons />
  </Grid>
);

TopMenuContent.propTypes = propTypes;

export default TopMenuContent;
