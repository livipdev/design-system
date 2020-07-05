import React from 'react';

import Grid from '../Grid';
import Container from '../Container';
import TopMenuContent from '../TopMenuContent';

import propTypes from './propTypes';

const TopMenu = ({ classes, guttersClass, variant }) => {
  const mergedClasses = {
    ...classes,
    root: [classes.root, guttersClass].join(" "),
  };

  return (
    <Grid container classes={mergedClasses}>
      <Container>
        <TopMenuContent variant={variant} />
      </Container>
    </Grid>
  );
};

TopMenu.propTypes = propTypes;

export default TopMenu;
