import React from 'react';

import Box from '../Box';
import Logotype from '../Logotype';

import propTypes from './propTypes';

const MainMenuLogotype = ({ classes, variant }) => (
  <Box classes={classes}>
    <Logotype variant={variant} />
  </Box>
);

MainMenuLogotype.propTypes = propTypes;

export default MainMenuLogotype;
