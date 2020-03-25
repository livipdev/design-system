import React from 'react';

import Link from '../Link';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const MenuLink = ({ classes, href, ...props }) => (
  <Link classes={classes} href={href} {...props} />
);

MenuLink.propTypes = propTypes;
MenuLink.defaultProps = defaultProps;

export default MenuLink;
