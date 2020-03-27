import React from 'react';

import Grid from '../Grid';
import HeaderMenu from '../HeaderMenu';
import SubMenuButtons from '../SubMenuButtons';

import propTypes from './propTypes';
import { buildSubMenu } from './builders';

const SubMenuContent = ({ classes, variant }) => {
  const menu = buildSubMenu(variant);

  return (
    <Grid item classes={classes} lg={10} xs={12}>
      <HeaderMenu menu={menu} customClasses={classes.menu} />
      <SubMenuButtons variant={variant} />
    </Grid>
  );
};

SubMenuContent.propTypes = propTypes;

export default SubMenuContent;
