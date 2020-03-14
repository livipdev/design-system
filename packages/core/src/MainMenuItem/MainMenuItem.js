import React from 'react';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import Link from '../Link';

const MainMenuItem = ({ children, href, label, classes }) => (
  <Link className={classes.primary} href={href}>
    { label }
  </Link>
);

MainMenuItem.propTypes = propTypes;
MainMenuItem.defaultProps = defaultProps;

export default MainMenuItem;
