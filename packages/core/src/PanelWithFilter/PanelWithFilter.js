import React from 'react';

import Container from '../Container';
import Tabs from '../Tabs';
import Tab from '../Tab';
import TabPanel from '../TabPanel';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const PanelWithFilter = ({
  classes,
  filter,
  handleChange,
  tabs,
  children,
  maxWidth,
}) => (
  <Container
    className={classes.container}
    maxWidth={maxWidth}
  >
    <Tabs
      value={filter}
      onChange={handleChange}
      centered
    >
      {
        tabs.map((tab) => (
          <Tab {...tab} />
        ))
      }
    </Tabs>
    <TabPanel>
      { children }
    </TabPanel>
  </Container>
);

PanelWithFilter.propTypes = propTypes;
PanelWithFilter.defaultProps = defaultProps;

export default PanelWithFilter;
