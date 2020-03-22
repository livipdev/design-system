import React from 'react';

import Container from '@livip/core/Container';
import TopMenu from '@livip/core/TopMenu';
import MainMenu from '@livip/core/MainMenu';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Header = ({ maxWidth, variant }) => (
  <Container maxWidth={maxWidth} disableGutters>
    <TopMenu variant={variant} />
    <MainMenu variant={variant} />
  </Container>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
