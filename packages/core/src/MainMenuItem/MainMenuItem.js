import React from 'react';

import propTypes from './propTypes';
import ListItem from '../ListItem';

const MainMenuItem = ({ classes, ...props }) => (
  <ListItem className={classes.root} {...props} />
);

MainMenuItem.propTypes = propTypes;

export default MainMenuItem;
