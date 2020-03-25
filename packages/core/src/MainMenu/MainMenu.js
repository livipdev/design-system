import React from 'react';

import Grid from '../Grid';
import Gutter from '../Gutter';
import MainMenuContent from '../MainMenuContent';

import propTypes from './propTypes';

const MainMenu = ({ classes, variant }) => (
  <Grid container classes={classes}>
    <Gutter lg={1} xs={false} />
    <MainMenuContent variant={variant} />
    <Gutter lg={1} xs={false} />
  </Grid>
);

MainMenu.propTypes = propTypes;

export default MainMenu;
