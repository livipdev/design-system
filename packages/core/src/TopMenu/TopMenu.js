import React from 'react';

import Container from '../Container';
import TopMenuClaim from '../TopMenuClaim';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const TopMenu = ({ classes, maxWidth, variant }) => (
  <Container classes={classes} maxWidth={maxWidth} disableGutters>
    <TopMenuClaim variant={variant} />
  </Container>
);

TopMenu.propTypes = propTypes;
TopMenu.defaultProps = defaultProps;

export default TopMenu;
