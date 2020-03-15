import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';

import propTypes from './propTypes';
import defautProps from './defaultProps';
import CssBaseline from '../../CssBaseline';

const ThemeProvider = ({ theme, muiProps, children }) => (
  <MuiThemeProvider theme={theme} {...muiProps}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

ThemeProvider.propTypes = propTypes;
ThemeProvider.defaultProps = defautProps;

export default ThemeProvider;
