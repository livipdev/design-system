import React from 'react';

import { MENU_TYPE_MAIN } from '@livipdev/containers/MenuMobile/constants';

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

const MainMenu = ({ classes, guttersClass, variant, isExiting }, ref) => {
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
    <Grid container classes={mergedClasses} ref={ref}>
      <Gutter lg={1} xs={false} />
      <MainMenuContent variant={variant} isExiting={isExiting} />
      <Gutter lg={1} xs={false} />
    </Grid>
  );
};

MainMenu.propTypes = propTypes;

export default React.forwardRef(MainMenu);
