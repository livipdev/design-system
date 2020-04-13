import React from 'react';

import propTypes from './propTypes';

const IconWithAction = ({ className, Icon, onClick }) => (
  <Icon
    className={className}
    onClick={onClick}
  />
);

IconWithAction.propTypes = propTypes;

export default IconWithAction;
