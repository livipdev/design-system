import React from 'react';

import Box from '../Box';
import Typography from '../Typography';

import propTypes from './propTypes';

const PageTitle = ({ title, subtitle }) => (
  <Box>
    <Typography variant="h1" message={title} />
    <Typography variant="subtitle1" message={subtitle} />
  </Box>
);

PageTitle.propTypes = propTypes;

export default PageTitle;
