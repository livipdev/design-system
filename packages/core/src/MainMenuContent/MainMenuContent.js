import React from 'react';

import Grid from '../Grid';
import MainMenuLogotype from '../MainMenuLogotype';
import HeaderMenu from '../HeaderMenu';
import MainMenuButtons from '../MainMenuButtons';

import propTypes from './propTypes';
import { buildMainMenu } from './builders';

const MainMenuContent = ({ variant }) => {
  const menu = buildMainMenu(variant);

  return (
    <Grid container justify='space-between' alignItems='center'>
      <MainMenuLogotype variant={variant} />
      <HeaderMenu menu={menu} />
      <MainMenuButtons />
    </Grid>
  );
};

MainMenuContent.propTypes = propTypes;

export default MainMenuContent;
