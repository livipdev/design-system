import React from 'react';

import Grid from '../Grid';
import MainMenuLogotype from '../MainMenuLogotype';
import HeaderMenu from '../HeaderMenu';
import MainMenuButtons from '../MainMenuButtons';

import propTypes from './propTypes';
import { buildMainMenu } from './builders';

const MainMenuContent = ({ variant, classes, ...props }) => {
  const menu = buildMainMenu(variant);

  return (
    <Grid item classes={classes} {...props}>
      <MainMenuLogotype variant={variant} />
      <HeaderMenu menu={menu} classes={{ root: classes.menu }} />
      <MainMenuButtons />
    </Grid>
  );
};

MainMenuContent.propTypes = propTypes;

export default MainMenuContent;
