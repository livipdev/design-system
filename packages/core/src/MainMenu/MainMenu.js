import React from 'react';

import Container from '../Container';
import Box from '../Box';
import Logotype from '../Logotype';
import MainMenuList from '../MainMenuList';
import Button from '../Button';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import { buildMenuItems } from './builders';

const MainMenu = ({ classes, maxWidth, variant }) => (
  <Container className={classes.container} maxWidth={maxWidth} disableGutters>
    <Box className={classes.box}>
      <Box className={classes.logoBox}>
        <Logotype variant={variant} />
      </Box>
      <Box className={classes.menuBox}>
        <MainMenuList>
          { buildMenuItems(variant) }
        </MainMenuList>
      </Box>
      <Box className={classes.box}>
        <Button variant="outlined">Clube Livip</Button>
        <Button color="secondary">Indique para sua empresa</Button>
      </Box>
    </Box>
  </Container>
);

MainMenu.propTypes = propTypes;
MainMenu.defaultProps = defaultProps;

export default MainMenu;
