import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';

import propTypes from './propTypes';

const AppBar = (props) => <MuiAppBar {...props} />;

AppBar.propTypes = {
  ...MuiAppBar.propTypes,
  ...propTypes,
};

export default AppBar;
