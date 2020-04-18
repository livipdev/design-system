import React from 'react';

import Container from '../Container';
import Tabs from '../Tabs';
import Tab from '../Tab';
import TabPanel from '../TabPanel';
import useWidth from '../styles/useWidth';

import { selectTabsCenteredFlag } from './selectors';
import propTypes from './propTypes';
import defaultProps from './defaultProps';

const PanelWithFilter = ({
  classes,
  filter,
  handleChange,
  tabs,
  children,
  maxWidth,
}) => {
  const viewport = useWidth();
  const centered = selectTabsCenteredFlag(viewport);

  return (
    <Container
      className={classes.container}
      maxWidth={maxWidth}
    >
      <Tabs
        value={filter}
        onChange={handleChange}
        scrollButtons="auto"
        centered={centered}
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
};

PanelWithFilter.propTypes = propTypes;
PanelWithFilter.defaultProps = defaultProps;

export default PanelWithFilter;
