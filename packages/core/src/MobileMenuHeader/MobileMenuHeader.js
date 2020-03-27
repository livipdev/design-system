import React from 'react';

import Grid from '../Grid';
import Logotype from '../Logotype';
import MobileMenuTypeToggler from '../MobileMenuTypeToggler';

import propTypes from './propTypes';

const MobileMenuHeader = ({ classes, currentMenu, toggleMenu, variant }) => (
  <Grid item classes={classes}>
    <Logotype variant={variant} />
    <MobileMenuTypeToggler currentMenu={currentMenu} toggleMenu={toggleMenu} />
  </Grid>
);

MobileMenuHeader.propTypes = propTypes;

export default MobileMenuHeader;
