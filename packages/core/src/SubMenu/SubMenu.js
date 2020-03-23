import React from 'react';

import Grid from '../Grid';
import HeaderMenu from '../HeaderMenu';
import SubMenuButtons from '../SubMenuButtons';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import { buildSubMenu } from './builders';

const SubMenu = ({ classes, variant, children, gutters }) => {
  const menu = buildSubMenu(variant);

  return (
    <Grid className={classes.container} container>
      <Grid xs={gutters.xs/2} />

      <HeaderMenu menu={menu} {...children.menu} />
      <SubMenuButtons {...children.buttons} />

      <Grid xs={gutters.xs/2} />
    </Grid>
  );
};

SubMenu.propTypes = propTypes;
SubMenu.defaultProps = defaultProps;

export default SubMenu;
