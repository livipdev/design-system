import React from 'react';

import Container from '../Container';
import Box from '../Box';
import Logotype from '../Logotype';
import MainMenuList from '../MainMenuList';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import { buildMenuItems } from './builders';

const MainMenu = ({ classes, maxWidth, variant }) => (
  <Container className={classes.container} maxWidth={maxWidth} disableGutters>
    <Box className={classes.rootBox}>
      <Box width={1 / 8} className={classes.logoBox}>
        <Logotype variant={variant} />
      </Box>
      <Box>
        <MainMenuList>
          { buildMenuItems() }
        </MainMenuList>
      </Box>
    </Box>
  </Container>
);

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
