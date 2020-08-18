import React from 'react';

import Grid from '../Grid';
import MainMenuContent from '../MainMenuContent';
import Container from '../Container';

import propTypes from './propTypes';

const mergeClasses = (classes, others) => (
  [
    classes.root,
    others.guttersClass,
  ].join(" ")
);

const MainMenu = ({ classes, guttersClass, variant, isExiting, rootLogotype }, ref) => {
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
      <Container>
        <MainMenuContent variant={variant} isExiting={isExiting} rootLogotype={rootLogotype} />
      </Container>
    </Grid>
  );
};

MainMenu.propTypes = propTypes;

export default React.forwardRef(MainMenu);
