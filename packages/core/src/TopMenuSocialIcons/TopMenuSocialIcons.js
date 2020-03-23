import React from 'react';

import Grid from '../Grid';

import propTypes from './propTypes';
import { buildSocialIcons } from './builders';

const TopMenuSocialIcons = ({ classes, xs, justify, alignItems }) => (
  <Grid classes={classes} xs={xs} justify={justify} alignItems={alignItems} container>
    { buildSocialIcons() }
  </Grid>
);

TopMenuSocialIcons.propTypes = propTypes;

export default TopMenuSocialIcons;
