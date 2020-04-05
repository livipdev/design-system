import React from 'react';

import Grid from '../Grid';
import propTypes from './propTypes';

const TabPanel = ({ children }) => (
  <Grid container>
    {children}
  </Grid>
);

TabPanel.propTypes = propTypes;

export default TabPanel;
