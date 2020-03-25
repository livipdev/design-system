import React from 'react';
import MuiButton from '@material-ui/core/Button';

import propTypes from './propTypes';

const Button = ({ classes, ...props }) => <MuiButton classes={classes} {...props} />;

Button.propTypes = {
  ...MuiButton.propTypes,
  ...propTypes,
};

export default Button;
