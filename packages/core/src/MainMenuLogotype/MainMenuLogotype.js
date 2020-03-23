import React from 'react';

import Grid from '../Grid';
import Logotype from '../Logotype';

import propTypes from './propTypes';

const MainMenuLogotype = ({ variant, xs, justify, alignItems }) => (
  <Grid xs={xs} justify={justify} alignItems={alignItems} container>
    <Logotype variant={variant} />
  </Grid>
);

MainMenuLogotype.propTypes = propTypes;

export default MainMenuLogotype;
