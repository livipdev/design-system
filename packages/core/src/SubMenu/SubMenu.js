import React from 'react';

import Grid from '../Grid';
import Gutter from '../Gutter';
import SubMenuContent from '../SubMenuContent';

import propTypes from './propTypes';

const SubMenu = ({ classes, variant }) => (
  <Grid container classes={classes}>
    <Gutter lg={1} xs={false} />
    <SubMenuContent variant={variant} />
    <Gutter lg={1} xs={false} />
  </Grid>
);

SubMenu.propTypes = propTypes;

export default SubMenu;
