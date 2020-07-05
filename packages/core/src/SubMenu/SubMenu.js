import React from 'react';

import { MENU_TYPE_SUB } from '@livipdev/containers/MenuMobile/constants';

import Grid from '../Grid';
import Container from '../Container';
import SubMenuContent from '../SubMenuContent';

import propTypes from './propTypes';

const mergeClasses = (classes, others) => (
  [
    classes.root,
    others.guttersClass,
  ].join(" ")
);

const SubMenu = ({ classes, guttersClass, variant, isExiting }, ref) => {
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
    <Grid container classes={mergedClasses} ref={ref}>
      <Container>
        <SubMenuContent variant={variant} isExiting={isExiting} />
      </Container>
    </Grid>
  );
};

SubMenu.propTypes = propTypes;

export default React.forwardRef(SubMenu);
