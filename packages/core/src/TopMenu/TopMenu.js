import React from 'react';

import Grid from '../Grid';
import TopMenuClaim from '../TopMenuClaim';
import TopMenuSocialIcons from '../TopMenuSocialIcons';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const TopMenu = ({
  classes,
  variant,
  gutters,
  container,
  items,
  justify,
  alignItems,
}) => (
  <Grid classes={classes} justify={justify} alignItems={alignItems} xs={container.xs} container>
    <Grid xs={gutters.xs/2} item/>

    <TopMenuClaim variant={variant} {...items.claim} />
    <TopMenuSocialIcons {...items.social}/>

    <Grid xs={gutters.xs/2} item/>
  </Grid>
);

TopMenu.propTypes = propTypes;
TopMenu.defaultProps = defaultProps;

export default TopMenu;
