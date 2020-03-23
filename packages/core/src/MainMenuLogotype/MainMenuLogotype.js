import React from 'react';

import Box from '../Box';
import Logotype from '../Logotype';

import propTypes from './propTypes';

const MainMenuLogotype = ({ variant, ...props }) => (
  <Box {...props}>
    <Logotype variant={variant} />
  </Box>
);

MainMenuLogotype.propTypes = propTypes;

export default MainMenuLogotype;
