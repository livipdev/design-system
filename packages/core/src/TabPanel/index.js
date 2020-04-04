import React from 'react';
import Container from '../Container';

import propTypes from './propTypes';

const TabPanel = ({ children }) => (
  <Container>
    {children}
  </Container>
);

TabPanel.propTypes = propTypes;

export default TabPanel;
