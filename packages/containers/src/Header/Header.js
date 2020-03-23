import React from 'react';

import Grid from '@livip/core/Grid';
import TopMenu from '@livip/core/TopMenu';
import MainMenu from '@livip/core/MainMenu';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Header = ({ variant, justify, alignItems, gutters }) => (
  <Grid justify={justify} alignItems={alignItems} container>
    <TopMenu variant={variant} gutters={gutters} />
    <MainMenu variant={variant} gutters={gutters} />
  </Grid>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
