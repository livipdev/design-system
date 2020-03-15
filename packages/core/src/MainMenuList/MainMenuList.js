import React from 'react';

import propTypes from './propTypes';
import List from '../List';

const MainMenuList = ({ classes, ...props }) => (
  <List className={ classes.root } { ...props } />
);

MainMenuList.propTypes = propTypes;

export default MainMenuList;
