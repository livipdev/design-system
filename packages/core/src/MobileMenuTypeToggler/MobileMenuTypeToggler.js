import React from 'react';

import ExpandLessIcon from '@livipdev/icons/ExpandLess';
import { MENU_TYPE_DEFAULT } from '@livipdev/containers/MenuMobile/constants';

import IconButton from '../IconButton';

import propTypes from './propTypes';

const mergeClasses = (classes, currentMenu) => (
  [
    classes.root,
    (currentMenu !== MENU_TYPE_DEFAULT)
      ? classes.reverse
      : classes.normal
  ].join(" ")
);

const MobileMenuTypeToggler = ({ classes, currentMenu, toggleMenu }) => {
  const mergedClasses = {
    ...classes,
    root: mergeClasses(classes, currentMenu),
  };

  return (
    <IconButton classes={mergedClasses} onClick={toggleMenu}>
      <ExpandLessIcon />
    </IconButton>
  );
};

MobileMenuTypeToggler.propTypes = propTypes;

export default MobileMenuTypeToggler;
