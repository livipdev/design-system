import React from 'react';

import Grid from '../Grid';
import Gutter from '../Gutter';
import TopMenuContent from '../TopMenuContent';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const TopMenu = ({ classes, variant, gutters, content }) => (
  <Grid container classes={classes}>
    <Gutter {...gutters} />
    <TopMenuContent variant={variant} {...content}/>
    <Gutter {...gutters} />
  </Grid>
);

TopMenu.propTypes = propTypes;
TopMenu.defaultProps = defaultProps;

export default TopMenu;
