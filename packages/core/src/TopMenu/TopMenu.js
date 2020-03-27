import React from 'react';

import Grid from '../Grid';
import Gutter from '../Gutter';
import TopMenuContent from '../TopMenuContent';

import propTypes from './propTypes';

const TopMenu = ({ classes, guttersClass, variant }) => {
  const mergedClasses = {
    ...classes,
    root: [classes.root, guttersClass].join(" "),
  };

  return (
    <Grid container classes={mergedClasses}>
      <Gutter lg={1} xs={false} />
      <TopMenuContent variant={variant} />
      <Gutter lg={1} xs={false} />
    </Grid>
  );
};

TopMenu.propTypes = propTypes;

export default TopMenu;
