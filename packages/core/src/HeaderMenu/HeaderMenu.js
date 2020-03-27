import React from 'react';

import Box from '../Box';

import { buildMenuItems } from './builders';
import propTypes from './propTypes';

const mergeClasses = (classes, customClasses) => (
  [
    classes.root,
    customClasses,
  ].join(" ")
);

const HeaderMenu = ({ classes, customClasses, menu }) => {
  const mergedClasses = {
    ...classes,
    root: mergeClasses(classes, customClasses),
  };

  return (
    <Box classes={mergedClasses}>
      { buildMenuItems(menu) }
    </Box>
  );
};

HeaderMenu.propTypes = propTypes;

export default HeaderMenu;
