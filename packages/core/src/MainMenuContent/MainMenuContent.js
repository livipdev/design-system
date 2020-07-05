import React from 'react';

import Grid from '../Grid';
import MainMenuLogotype from '../MainMenuLogotype';
import HeaderMenu from '../HeaderMenu';
import MainMenuButtons from '../MainMenuButtons';

import propTypes from './propTypes';
import { buildMainMenu } from './builders';

const mergeClasses = (classes, others) => (
  [
    classes.root,
    others.isExiting
      ? classes.isExiting
      : classes.isNotExiting,
  ].join(" ")
);

const MainMenuContent = ({ variant, classes, isExiting }) => {
  const menu = buildMainMenu(variant);
  const mergedClasses = {
    ...classes,
    root: mergeClasses(
      classes,
      {
        isExiting,
      }
    ),
  };

  return (
    <Grid item classes={mergedClasses} lg={12} xs={12}>
      <MainMenuLogotype variant={variant} />
      <HeaderMenu menu={menu} />
      <MainMenuButtons isExiting={isExiting} />
    </Grid>
  );
};

MainMenuContent.propTypes = propTypes;

export default MainMenuContent;
