import React from 'react';

import Grid from '../Grid';
import Gutter from '../Gutter';
import SubMenuContent from '../SubMenuContent';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const SubMenu = ({ classes, variant, gutters, content }) => (
  <Grid container classes={classes}>
    <Gutter {...gutters}/>
    <SubMenuContent variant={variant} {...content}/>
    <Gutter {...gutters}/>
  </Grid>
);

SubMenu.propTypes = propTypes;
SubMenu.defaultProps = defaultProps;

export default SubMenu;
