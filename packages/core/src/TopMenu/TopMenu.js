import React from 'react';

import Container from '../Container';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const TopMenu = ({ classes, maxWidth, variant }) => (
  <Container className={classes.container} maxWidth={maxWidth} disableGutters>
    <div>Ok</div>
  </Container>
);

TopMenu.propTypes = propTypes;
TopMenu.defaultProps = defaultProps;

export default TopMenu;
