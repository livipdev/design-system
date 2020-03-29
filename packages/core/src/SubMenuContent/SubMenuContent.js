import React from 'react';

import Grid from '../Grid';
import HeaderMenu from '../HeaderMenu';
import SubMenuButtons from '../SubMenuButtons';

import propTypes from './propTypes';
import { buildSubMenu } from './builders';

const mergeClasses = (classes, others) => (
  [
    classes.root,
    others.isExiting
      ? classes.isExiting
      : classes.isNotExiting,
  ].join(" ")
);

const SubMenuContent = ({ classes, variant, isExiting }) => {
  const menu = buildSubMenu(variant);
  const mergedClasses = {
    ...classes,
    root: mergeClasses(
      classes,
      {
        isExiting,
      }
    ),
  };

  return (
    <Grid item classes={mergedClasses} lg={10} xs={12}>
      <HeaderMenu menu={menu} customClasses={classes.menu} />
      <SubMenuButtons variant={variant} isExiting={isExiting} />
    </Grid>
  );
};

SubMenuContent.propTypes = propTypes;

export default SubMenuContent;
