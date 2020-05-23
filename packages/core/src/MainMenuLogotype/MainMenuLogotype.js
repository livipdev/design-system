import React from 'react';

import Box from '../Box';
import Logotype from '../Logotype';

import propTypes from './propTypes';

const MainMenuLogotype = ({ classes, variant }) => (
  <Box classes={classes}>
    <Logotype className={classes.logo} variant={variant} width="100%" height="1.3em" />
  </Box>
);

MainMenuLogotype.propTypes = propTypes;

export default MainMenuLogotype;
