import React from 'react';

import Grid from '../Grid';

import propTypes from './propTypes';
import { buildVariantButtons } from './builders';

const SubMenuButtons = ({ variant, xs, alignItems, justify }) => (
  <Grid xs={xs} alignItems={alignItems} justify={justify} container>
    { buildVariantButtons(variant) }
  </Grid>
);

SubMenuButtons.propTypes = propTypes;

export default SubMenuButtons;
