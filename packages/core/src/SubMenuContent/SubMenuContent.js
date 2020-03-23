import React from 'react';

import Grid from '../Grid';
import HeaderMenu from '../HeaderMenu';
import SubMenuButtons from '../SubMenuButtons';

import propTypes from './propTypes';
import { buildSubMenu } from './builders';

const SubMenuContent = ({ classes, variant, ...props }) => {
  const menu = buildSubMenu(variant);

  return (
    <Grid item classes={classes} {...props}>
      <HeaderMenu menu={menu} classes={{ root: classes.menu }} />
      <SubMenuButtons variant={variant} />
    </Grid>
  );
};

SubMenuContent.propTypes = propTypes;

export default SubMenuContent;
