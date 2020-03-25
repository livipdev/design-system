import React from 'react';

import Grid from '../Grid';
import Logotype from '../Logotype';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const MainMenuLogotype = ({ classes, variant }) => (
  <Grid item classes={classes}>
    <Logotype variant={variant} />
  </Grid>
);

MainMenuLogotype.propTypes = propTypes;
MainMenuLogotype.defaultProps = defaultProps;

export default MainMenuLogotype;
