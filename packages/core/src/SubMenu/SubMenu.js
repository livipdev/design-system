import React from 'react';

import { MENU_TYPE_SUB } from '@livip/containers/MenuMobile/constants';

import Grid from '../Grid';
import Gutter from '../Gutter';
import SubMenuContent from '../SubMenuContent';

import propTypes from './propTypes';

const mergeClasses = (classes, others) => (
  [
    classes.root,
    others.guttersClass,
  ].join(" ")
);

const SubMenu = ({ classes, guttersClass, variant }) => {
    const mergedClasses = {
    ...classes,
    root: mergeClasses(
      classes,
      {
        guttersClass,
      }
    ),
  };

  return (
    <Grid container classes={mergedClasses}>
      <Gutter lg={1} xs={false} />
      <SubMenuContent variant={variant} />
      <Gutter lg={1} xs={false} />
    </Grid>
  );
};

SubMenu.propTypes = propTypes;

export default SubMenu;
