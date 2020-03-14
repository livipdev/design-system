import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import propTypes from './propTypes';
import defautProps from './defaultProps';

const ThemeProvider = ({ theme, muiProps, children }) => (
  <MuiThemeProvider theme={theme} {...muiProps}>
    {children}
  </MuiThemeProvider>
);

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defautProps;

export default ThemeProvider;
