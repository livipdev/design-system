import React from 'react';

import Box from '../Box';

import propTypes from './propTypes';
import { buildVariantButtons } from './builders';

const SubMenuButtons = ({ variant, classes, isExiting }) => {
  const mergedClasses = {
    ...classes,
    root: [
      classes.root,
      isExiting
        ? classes.isExiting
        : classes.isNotExiting,
    ].join(" "),
  };

  return (
    <Box classes={mergedClasses}>
      { buildVariantButtons(variant) }
    </Box>
  );
};

SubMenuButtons.propTypes = propTypes;

export default SubMenuButtons;
