import React from 'react';

import Container from '../Container';
import Typography from '../Typography';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Title = ({ classes, maxWidth, title, subtitle }) => (
  <Container classes={classes} maxWidth={maxWidth}>
    <Typography
      variant={title.variant}
      message={title.message}
    />
    <Typography
      variant={subtitle.variant}
      message={subtitle.message}
    />
  </Container>
);

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
