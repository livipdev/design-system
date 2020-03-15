import React from 'react';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import Link from '../Link';

const MainMenuItem = ({ classes, ...props }) => (
  <Link className={classes.root} {...props} />
);

MainMenuItem.propTypes = propTypes;
MainMenuItem.defaultProps = defaultProps;

export default MainMenuItem;
