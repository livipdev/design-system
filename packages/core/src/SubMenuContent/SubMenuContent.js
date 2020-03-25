import React from 'react';

import Grid from '../Grid';
import HeaderMenu from '../HeaderMenu';
import SubMenuButtons from '../SubMenuButtons';

import propTypes from './propTypes';
import { buildSubMenu } from './builders';

const SubMenuContent = ({ classes, variant }) => {
  const menu = buildSubMenu(variant);

  return (
    <Grid container classes={classes}>
      <HeaderMenu menu={menu} classes={{ root: classes.menu }} />
      <SubMenuButtons variant={variant} />
    </Grid>
  );
};

SubMenuContent.propTypes = propTypes;

export default SubMenuContent;
