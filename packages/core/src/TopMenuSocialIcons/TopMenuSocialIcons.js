import React from 'react';

import Grid from '../Grid';

import { buildSocialIcons } from './builders';

const TopMenuSocialIcons = ({ classes }) => (
  <Grid item classes={classes}>
    { buildSocialIcons() }
  </Grid>
);

export default TopMenuSocialIcons;
