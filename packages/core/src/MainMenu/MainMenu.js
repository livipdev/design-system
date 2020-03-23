import React from 'react';

import Grid from '../Grid';
import Gutter from '../Gutter';
import MainMenuContent from '../MainMenuContent';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const MainMenu = ({ classes, variant, gutters, content }) => (
  <Grid container className={classes.container}>
    <Gutter {...gutters}/>
    <MainMenuContent variant={variant} {...content}/>
    <Gutter {...gutters}/>
  </Grid>
);

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
