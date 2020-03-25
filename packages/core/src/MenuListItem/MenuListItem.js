import React from 'react';

import ListItem from '../ListItem';
import propTypes from './propTypes';

const MenuListItem = ({ classes, ...props }) => <ListItem classes={classes} {...props} />;

MenuListItem.propTypes = {
  ...ListItem.propTypes,
  ...propTypes,
};

export default MenuListItem;
