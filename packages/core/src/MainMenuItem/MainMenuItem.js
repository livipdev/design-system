import React from 'react';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import { selectClassname } from './selectors';
import ListItem from '../ListItem';

const MainMenuItem = ({ classes, active, ...props }) => (
  <ListItem className={selectClassname(classes, active)} {...props} />
);

MainMenuItem.propTypes = propTypes;
MainMenuItem.defaultProps = defaultProps;

export default MainMenuItem;
