import React, { useState } from 'react';
import xor from 'lodash/xor';
import { MENU_TYPE_MAIN, MENU_TYPE_SUB } from '@livip/containers/MenuMobile/constants';

import Grid from '../Grid';
import Slide from '../Slide';
import MainMenu from '../MainMenu';
import SubMenu from '../SubMenu';

import propTypes from './propTypes';

const MobileMenuContent = ({ currentMenu, variant }) => (
  <Grid item>
    <Slide
      direction="down"
      in={currentMenu===MENU_TYPE_MAIN}
      mountOnEnter
      unmountOnExit
    >
      <MainMenu variant={variant} isExiting={currentMenu!==MENU_TYPE_MAIN} />
    </Slide>

    <Slide
      direction="down"
      in={currentMenu===MENU_TYPE_SUB}
      mountOnEnter
      unmountOnExit
    >
      <SubMenu variant={variant} isExiting={currentMenu!==MENU_TYPE_SUB} />
    </Slide>
  </Grid>
);

MobileMenuContent.propTypes = propTypes;

export default MobileMenuContent;
