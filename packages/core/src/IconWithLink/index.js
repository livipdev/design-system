import React from 'react';

import Link from '../Link';
import propTypes from './propTypes';

const SocialIcon = ({ className, Icon, href }) => (
  <Link href={href}>
    <Icon className={className} />
  </Link>
);

SocialIcon.propTypes = propTypes;

export default SocialIcon;
