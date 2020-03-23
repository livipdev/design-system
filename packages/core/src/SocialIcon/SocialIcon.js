import React from 'react';

import Link from '../Link';
import propTypes from './propTypes';

const SocialIcon = ({ classes, Icon, href }) => (
  <Link href={href}>
    <Icon classes={classes} />
  </Link>
);

SocialIcon.propTypes = propTypes;

export default SocialIcon;
