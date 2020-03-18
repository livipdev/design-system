import React from 'react';

import propTypes from './propTypes';
import defaultProps from './defaultProps';
import Link from '../Link';

const MainMenuLink = ({ classes, ...props }) => (
  <Link className={classes.root} {...props} />
);

MainMenuLink.propTypes = propTypes;
MainMenuLink.defaultProps = defaultProps;

export default MainMenuLink;
