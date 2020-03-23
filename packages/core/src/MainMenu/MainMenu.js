import React from 'react';

import Grid from '../Grid';
import MainMenuLogotype from '../MainMenuLogotype';
import MainMenuList from '../MainMenuList';
import MainMenuButtons from '../MainMenuButtons';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const MainMenu = ({ classes, variant, items, gutters }) => (
  <Grid className={classes.container} container>
    <Grid xs={gutters.xs/2} />

    <MainMenuLogotype variant={variant} {...items.logotype} />
    <MainMenuList variant={variant} {...items.menu} />
    <MainMenuButtons {...items.buttons} />

    <Grid xs={gutters.xs/2} />
  </Grid>
);

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
