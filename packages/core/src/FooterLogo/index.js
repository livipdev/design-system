import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import Logotype from '../Logotype';

const FooterLogo = ({ variant, ...props }) => (
  <Box {...props} component="div">
    <Logotype variant={variant} rootLogotype />
  </Box>
);

FooterLogo.propTypes = {
  variant: PropTypes.string,
};

export default FooterLogo;
