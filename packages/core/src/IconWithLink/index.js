import React from 'react';

import Link from '../Link';
import propTypes from './propTypes';

const IconWithLink = ({ className, Icon, href, dataAction }) => (
  <Link href={href} dataAction={dataAction}>
    <Icon className={className} />
  </Link>
);

IconWithLink.propTypes = propTypes;

export default IconWithLink;
