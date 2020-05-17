import React from 'react';
import ShareIcon from '@livipdev/icons/Share';

import IconWithAction from '../IconWithAction';
import propTypes from './propTypes';

const EventCardActions = ({ classes, toggleSide }) => (
  <IconWithAction
    className={classes.icon}
    Icon={ShareIcon}
    onClick={toggleSide}
  />
);

EventCardActions.propTypes = propTypes;

export default EventCardActions;
