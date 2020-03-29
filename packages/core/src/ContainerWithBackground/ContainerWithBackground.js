import React from 'react';

import Container from '../Container';

import propTypes from './propTypes';

const ContainerWithBackground = ({ classes, variant, children }) => {
  const mergedClasses = {
    ...classes,
    root: [
      classes.root,
      classes[variant],
    ].join(" "),
  };

  return (
    <Container
      classes={mergedClasses}
      maxWidth={false}
      disableGutters={true}
    >
      {children}
    </Container>
  );
};

ContainerWithBackground.propTypes = propTypes;

export default ContainerWithBackground;
