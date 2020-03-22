import React from 'react';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import Link from '../Link';

const MenuLink = ({ classes, ...props }) => (
  <Link className={classes.root} {...props} />
);

MenuLink.propTypes = propTypes;
MenuLink.defaultProps = defaultProps;

export default MenuLink;
