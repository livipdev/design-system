import React from 'react';

import defaultProps from './defaultProps';
import Link from '../Link';

const MenuLink = ({ classes, href, ...props }) => (
  <Link classes={classes} href={href} {...props} />
);

MenuLink.defaultProps = defaultProps;

export default MenuLink;
