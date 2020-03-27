import React from 'react';

import { MENU_TYPE_MAIN } from '@livip/containers/MenuMobile/constants';

import Grid from '../Grid';
import Gutter from '../Gutter';
import MainMenuContent from '../MainMenuContent';

import propTypes from './propTypes';

const mergeClasses = (classes, others) => (
  [
    classes.root,
    others.guttersClass,
  ].join(" ")
);

const MainMenu = ({ classes, guttersClass, variant }) => {
  const mergedClasses = {
    ...classes,
    root: mergeClasses(
      classes,
      {
        guttersClass,
      }
    ),
  };

  return (
    <Grid container classes={mergedClasses}>
      <Gutter lg={1} xs={false} />
      <MainMenuContent variant={variant} />
      <Gutter lg={1} xs={false} />
    </Grid>
  );
};

MainMenu.propTypes = propTypes;

export default MainMenu;
