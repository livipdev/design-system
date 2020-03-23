import React from 'react';

import Grid from '../Grid';
import MainMenuLogotype from '../MainMenuLogotype';
import HeaderMenu from '../HeaderMenu';
import MainMenuButtons from '../MainMenuButtons';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import { buildMainMenu } from './builders';

const MainMenu = ({ classes, variant, children, gutters }) => {
  const menu = buildMainMenu(variant);

  return (
    <Grid className={classes.container} container>
      <Grid xs={gutters.xs/2} />

      <MainMenuLogotype variant={variant} {...children.logotype} />
      <HeaderMenu menu={menu} {...children.menu} />
      <MainMenuButtons {...children.buttons} />

      <Grid xs={gutters.xs/2} />
    </Grid>
  );
};

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
