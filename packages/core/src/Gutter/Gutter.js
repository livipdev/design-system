import React from 'react';

import Grid from '../Grid';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Gutter = (props) => <Grid item {...props} />;

Gutter.propTypes = propTypes;
Gutter.defaultProps = defaultProps;

export default Gutter;
