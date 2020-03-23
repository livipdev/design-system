import React from 'react';
import MuiButton from '@material-ui/core/Button';

const Button = (props) => <MuiButton {...props} />;

Button.propTypes = MuiButton.propTypes;

export default Button;
